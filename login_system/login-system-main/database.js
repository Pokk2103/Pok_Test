const sqlite3 = require('sqlite3').verbose();

// データベースの初期化（永続的なデータベースを使用）
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// ユーザーテーブルの作成
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      password TEXT NOT NULL
    )
  `);
});

module.exports = db; // dbをエクスポートして他のファイルから使えるようにする
