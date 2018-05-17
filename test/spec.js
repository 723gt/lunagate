const Application = require("spectron").Application;
const assert = require("assert");
const path = require("path");

// Electronの実行ファイルまでのパス 
const electronPath = path.join(__dirname,"../node_modules/.bin/electron");
// Electronのアプリ起動パス。testフォルダーからの相対パス「../」
const appPath = path.join(__dirname, "../main.js");

describe('Application launch', function () {
  before(function() {
    // アプリケーション
     app = new Application({
      // Electronの実行ファイルまでのパス
      path: electronPath,
      // electronを実行する際の引数
      args: [appPath]
    });
    return app.start()
  });

  after(function(){
    if (app && app.isRunning()){
      return app.stop();
    }
  })
  //テストファイル読み込み
  require("./window/window.js");
})
