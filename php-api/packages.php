<?php
require __DIR__ . '/db.php';

api_headers();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    api_response(['success' => false, 'message' => 'Method not allowed'], 405);
}

try {
    $pdo = api_pdo();

    // 1. Check if dedicated `packages` table exists
    $tableExists = false;
    try {
        $check = $pdo->query("SHOW TABLES LIKE 'packages'");
        $tableExists = (bool) $check->fetch();
    } catch (Throwable $t) {
        $tableExists = false;
    }

    if ($tableExists) {
        $stmt = $pdo->query("SELECT * FROM packages WHERE is_active = 1 ORDER BY sort_order ASC, id ASC");
        $packages = $stmt->fetchAll();

        foreach ($packages as &$pkg) {
            if (isset($pkg['events']) && is_string($pkg['events'])) {
                $decoded = json_decode($pkg['events'], true);
                if (is_array($decoded)) {
                    $pkg['events'] = $decoded;
                }
            }
            if (isset($pkg['isPopular'])) {
                $pkg['isPopular'] = (bool) $pkg['isPopular'];
            }
        }

        $catStmt = $pdo->query("SELECT DISTINCT category FROM packages WHERE is_active = 1 AND category IS NOT NULL");
        $tabs = $catStmt->fetchAll(PDO::FETCH_COLUMN);

        api_response([
            'tabs' => array_values($tabs),
            'packages' => $packages
        ]);
    } else {
        // 2. Query `dynamic_content` table where type = 'packages'
        $stmt = $pdo->prepare("SELECT data FROM dynamic_content WHERE type = 'packages' AND is_active = 1 ORDER BY updated_at DESC LIMIT 1");
        $stmt->execute();
        $row = $stmt->fetch();

        if ($row && !empty($row['data'])) {
            $data = json_decode($row['data'], true);
            api_response($data);
        } else {
            api_response(['tabs' => [], 'packages' => []]);
        }
    }
} catch (Throwable $e) {
    api_response(['success' => false, 'message' => 'Database connection error: ' . $e->getMessage()], 500);
}
