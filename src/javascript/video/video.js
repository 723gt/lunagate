function drawVide(){
  var videoForm = document.getElementById('videoForm');
  //カメラの起動
  navigator.webkitGetUserMedia({video: true, audio: false}, _handleSuccess, _handleError);
  function _handleSuccess(localMediaStream) {
    videoForm.src = window.URL.createObjectURL(localMediaStream);
    //videoForm.play();
    drawTrack(videoForm);
  }
  
  function _handleError() {
    alert("ERROR: カメラの使用を許可してください。");
  }
}

function drawTrack(videoForm){
  const trackForm = document.getElementById('trackForm');
  const ctracker = new clm.tracker();
  const cc = trackForm.getContext('2d');
  let  img = new Image();
  img.src = "../../../tmp/face.png";
  let flag = true
  ctracker.init(pModel);
  console.log(videoForm);
  ctracker.start(videoForm);
  function positionLoop() {
    requestAnimationFrame(positionLoop);
    positions = ctracker.getCurrentPosition();
     // positions = [[x_0, y_0], [x_1,y_1], ... ]
      // do something with the positions ...
  }
  positionLoop();

  function drawLoop() {
    requestAnimationFrame(drawLoop);
    const pos_aaray = ctracker.getCurrentPosition();
    const pos = pos_aaray[0];
    console.log(trackForm.width);
    console.log(trackForm.height);

    console.log(pos);
    if(pos){
      cc.clearRect(0, 0, trackForm.width, trackForm.height);
      cc.drawImage(img,pos[0],pos[1]);
      ctracker.draw(trackForm);
    }
  }
  drawLoop();
}
