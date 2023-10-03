
// 각도에 따른 방향 이미지 변환
function rotateMarker(marker, angle) {
  let markerImageSrc;

  if (angle >= -22.5 && angle < 22.5) { markerImageSrc = './src/east.png'; } // 동
  else if (angle >= 22.5 && angle < 67.5) { markerImageSrc = './src/northeast.png'; } // 북동
  else if (angle >= 67.5 && angle < 112.5) { markerImageSrc = './src/north.png'; } // 북
  else if (angle >= 112.5 && angle < 157.5) { markerImageSrc = './src/northwest.png'; } // 북서
  else if ((angle >= 157.5 && angle <= 180) || (angle >= -180 && angle < -157)) { markerImageSrc = './src/west.png'; } // 서
  else if (angle > -157 && angle < -112) { markerImageSrc = './src/southwest.png' }//남서 
  else if (angle > -112 && angle < -67) { markerImageSrc = './src/east.png' }//남 
  else { markerImageSrc = './src/southeast.png' }//남동 

  var imageSize = new kakao.maps.Size(80, 80);
  var imageOption = { offset: new kakao.maps.Point(17, 34) };

  var changeMarkerImg = new kakao.maps.Marker({
    position: currentPosition,
    map: map,
    image: new kakao.maps.MarkerImage(markerImageSrc, imageSize, imageOption)
  });

  return changeMarkerImg;
}