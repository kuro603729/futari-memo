// Firebase / GAS 設定テンプレート
// このファイルを `firebase-config.js` にコピーし、取得した値を設定すると
// デモモードから本番モード（Firestoreリアルタイム同期 + プッシュ通知）へ自動的に切り替わります。
window.FUTARI_CONFIG = {
  // Firebase Console > プロジェクト設定 > マイアプリ（ウェブ）からコピー
  firebase: {
    apiKey: "AIzaSyAxGqmsnLxzvjfk-rNcJaXXPOHRJTkxqx0",
    authDomain: "two-reminder.firebaseapp.com",
    projectId: "two-reminder",
    storageBucket: "two-reminder.firebasestorage.app",
    messagingSenderId: "510609378383",
    appId: "1:510609378383:web:c42972e25cef4f57746e3a"
  },
  // Firebase Console > Cloud Messaging > ウェブプッシュ証明書 (VAPIDキー)
  vapidKey: "BJL9AgW45KtfhwQdwt-4UMgtSnykS0vdxMdBOs1lvs87HJPO4LlSYy9lJdrH6j8SWRNQ1njQhDdxIhPZUGBud_o",
  // Google Apps Script ウェブアプリURL（通知A: パートナー追加時の即時プッシュ通知中継用）
  gasWebhookUrl: "https://script.google.com/macros/s/AKfycbxWeYpl_GfKFt_Zo6_8I6i6bkCi2yxfUO2yTfxtytsEojt3FOhOuZnlTtQ5Sf_kPVnz9w/exec"
};
