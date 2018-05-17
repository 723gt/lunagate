const assert = require("assert");
const path = require("path");

describe('Window test',function(){
  it("Windowが表示されているか",function(){
    return app.browserWindow.isVisible().then(function(cont){
      assert.equal(cont,true);
    })
  })

  it("WindowのタイトルがLunaGateであるか",function(){
    return app.client.getTitle().then(function(cont){
      assert.equal(cont,"LunaGate");
    })
  })
})
