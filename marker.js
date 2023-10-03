// 마커와 관련된 코드를 이 파일로 이동합니다.

function displayMarker(locPosition) {

  // 기존의 marker가 있으면 지워줍니다.
  if (marker != null) {
      marker.setMap(null);
  }

  // 마커 이미지의 이미지 크기 입니다
  let imageSize = new kakao.maps.Size(20, 20); 

  let markerImageSrc ='./src/star1.png';
  let markerImageOption ={offset :new kakao.maps.Point(17,34)};
  let markerImage=new kakao.maps.MarkerImage(markerImageSrc,imageSize ,markerImageOption);

  // 전역 변수인 marker에 새로운 Marker 객체를 할당합니다.
  marker = new kakao.maps.Marker({
      position: locPosition,
      image:markerImage
    }); 

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);  

    // 지도 중심 좌표를 접속위치로 변경합니다.
    map.setCenter(locPosition);      
}

// 여러 포인트 지점 좌표 생성
var pointPositions = [
  new kakao.maps.LatLng(37.55443, 126.89574),
  new kakao.maps.LatLng(37.54306, 126.91400),
  new kakao.maps.LatLng(37.52988, 126.95228),
  new kakao.maps.LatLng(37.51955, 126.99581),
  new kakao.maps.LatLng(37.53037, 127.06723),
  new kakao.maps.LatLng(37.54338, 127.10737),
  ];

  var imageSize = new kakao.maps.Size(80, 80);

  var markerImage = new kakao.maps.MarkerImage('./src/star1.png', imageSize);

  // 각 포인트 지점마다 마커 생성
  pointPositions.forEach(function (pointPosition) {
    var pointMarker = new kakao.maps.Marker({
        position: pointPosition,
        map: map,
        image: markerImage
    });
  });



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