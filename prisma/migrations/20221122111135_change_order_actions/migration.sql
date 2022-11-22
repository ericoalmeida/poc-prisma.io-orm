-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_order_items" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "total" REAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "order_items_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_order_items" ("amount", "created_at", "id", "order_id", "product_id", "total", "updated_at") SELECT "amount", "created_at", "id", "order_id", "product_id", "total", "updated_at" FROM "order_items";
DROP TABLE "order_items";
ALTER TABLE "new_order_items" RENAME TO "order_items";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
