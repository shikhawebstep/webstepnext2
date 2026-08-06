<?php
require __DIR__ . '/db.php';

api_headers();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    api_response(['success' => false, 'message' => 'Method not allowed'], 405);
}

$slug = $_GET['slug'] ?? null;

try {
    $pdo = api_pdo();

    // 1. Check if dedicated `blogs` table exists
    $tableExists = false;
    try {
        $check = $pdo->query("SHOW TABLES LIKE 'blogs'");
        $tableExists = (bool) $check->fetch();
    } catch (Throwable $t) {
        $tableExists = false;
    }

    if ($tableExists) {
        if ($slug) {
            $stmt = $pdo->prepare("SELECT * FROM blogs WHERE slug = :slug AND is_active = 1 LIMIT 1");
            $stmt->execute(['slug' => $slug]);
            $blog = $stmt->fetch();

            if (!$blog) {
                api_response(['success' => false, 'message' => 'Blog not found'], 404);
            }

            if (isset($blog['tags']) && is_string($blog['tags'])) {
                $decoded = json_decode($blog['tags'], true);
                if (is_array($decoded)) {
                    $blog['tags'] = $decoded;
                }
            }

            $relStmt = $pdo->prepare("SELECT title, slug, category, image, excerpt, published_date, read_time FROM blogs WHERE slug != :slug AND is_active = 1 ORDER BY id DESC LIMIT 3");
            $relStmt->execute(['slug' => $slug]);
            $related = $relStmt->fetchAll();

            api_response([
                'blog' => $blog,
                'related' => $related
            ]);
        } else {
            $stmt = $pdo->query("SELECT * FROM blogs WHERE is_active = 1 ORDER BY published_date DESC, id DESC");
            $blogs = $stmt->fetchAll();

            foreach ($blogs as &$b) {
                if (isset($b['tags']) && is_string($b['tags'])) {
                    $decoded = json_decode($b['tags'], true);
                    if (is_array($decoded)) {
                        $b['tags'] = $decoded;
                    }
                }
            }

            $catStmt = $pdo->query("SELECT DISTINCT category FROM blogs WHERE is_active = 1 AND category IS NOT NULL");
            $categories = $catStmt->fetchAll(PDO::FETCH_COLUMN);

            api_response([
                'categories' => array_values($categories),
                'blogs' => $blogs
            ]);
        }
    } else {
        // 2. Query `dynamic_content` table where type = 'blogs'
        $stmt = $pdo->prepare("SELECT data FROM dynamic_content WHERE type = 'blogs' AND is_active = 1 ORDER BY updated_at DESC LIMIT 1");
        $stmt->execute();
        $row = $stmt->fetch();

        if ($row && !empty($row['data'])) {
            $data = json_decode($row['data'], true);
            $categories = $data['categories'] ?? [];
            $blogs = $data['blogs'] ?? [];

            if ($slug) {
                $found = null;
                foreach ($blogs as $b) {
                    if (($b['slug'] ?? '') === $slug) {
                        $found = $b;
                        break;
                    }
                }

                if (!$found) {
                    api_response(['success' => false, 'message' => 'Blog not found'], 404);
                }

                $related = [];
                foreach ($blogs as $b) {
                    if (($b['slug'] ?? '') !== $slug) {
                        $related[] = [
                            'title' => $b['title'] ?? '',
                            'slug' => $b['slug'] ?? '',
                            'category' => $b['category'] ?? '',
                            'image' => $b['image'] ?? '',
                            'excerpt' => $b['excerpt'] ?? '',
                            'published_date' => $b['published_date'] ?? '',
                            'read_time' => $b['read_time'] ?? ''
                        ];
                    }
                }

                api_response([
                    'blog' => $found,
                    'related' => $related
                ]);
            } else {
                api_response([
                    'categories' => $categories,
                    'blogs' => $blogs
                ]);
            }
        } else {
            api_response(['categories' => [], 'blogs' => []]);
        }
    }
} catch (Throwable $e) {
    api_response(['success' => false, 'message' => 'Database connection error: ' . $e->getMessage()], 500);
}
