<?php
require __DIR__ . '/db.php';

api_headers();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    api_response(['success' => false, 'message' => 'Method not allowed'], 405);
}

$input = api_json_input();

$package_id    = (int)($input['package_id'] ?? 0);
$package_title = trim((string)($input['package_title'] ?? ''));
$name          = trim((string)($input['name'] ?? ''));
$email         = trim((string)($input['email'] ?? ''));
$phone         = trim((string)($input['phone'] ?? ''));
$message       = trim((string)($input['message'] ?? ''));

if ($name === '' || $email === '') {
    api_response(['success' => false, 'message' => 'Name and email are required.'], 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    api_response(['success' => false, 'message' => 'Please enter a valid email address.'], 422);
}

try {
    $pdo = api_pdo();

    // Store in contact_leads table (source = 'plan-inquiry') with package info in package_json
    $stmt = $pdo->prepare(
        'INSERT INTO contact_leads (source, name, email, phone, message, package_json, ip_address, user_agent)
         VALUES (:source, :name, :email, :phone, :message, :package_json, :ip_address, :user_agent)'
    );

    $packageData = [
        'package_id'    => $package_id,
        'package_title' => $package_title,
    ];

    $stmt->execute([
        'source'       => 'plan-inquiry',
        'name'         => $name,
        'email'        => $email,
        'phone'        => $phone,
        'message'      => $message,
        'package_json' => json_encode($packageData, JSON_UNESCAPED_SLASHES),
        'ip_address'   => $_SERVER['REMOTE_ADDR'] ?? null,
        'user_agent'   => $_SERVER['HTTP_USER_AGENT'] ?? null,
    ]);

    // Send notification email
    $config = api_config()['mail'];

    $subject = sprintf('%s: Plan Inquiry — %s', $config['subject_prefix'], $package_title ?: "Package #{$package_id}");

    $bodyLines = [
        "New Plan Inquiry from Webstep",
        "-----------------------------------",
        "Package ID   : {$package_id}",
        "Package Title: {$package_title}",
        "-----------------------------------",
        "Name  : {$name}",
        "Email : {$email}",
        "Phone : {$phone}",
        "",
        "Message:",
        $message,
    ];

    $headers = [
        'From: ' . $config['from'],
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8',
    ];

    @mail($config['to'], $subject, implode("\n", $bodyLines), implode("\n", $headers));

    api_response(['success' => true, 'message' => 'Inquiry submitted successfully.']);
} catch (Throwable $e) {
    api_response(['success' => false, 'message' => 'Unable to submit inquiry right now. Please try again.'], 500);
}
