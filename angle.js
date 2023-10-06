// 각도 관련 함수와 관련된 코드를 이 파일로 이동합니다.

 // 두 지점 사이의 각도 계산
 function calculateAngle(startPoint, endPoint) {
    let dy = endPoint.getLat() - startPoint.getLat();
    let dx = endPoint.getLng() - startPoint.getLng();
    let theta = Math.atan2(dy, dx); // range (-PI, PI]
  
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  
    return theta;
  }