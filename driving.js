var timer; // 타이머 변수
var startTime; // 주행 시작 시간
var elapsedTime = 0; // 경과 시간

// 두 지점 간의 거리 계산 함수 (Haversine 공식 사용)
function calculateDistance(pos1, pos2) {
    var R = 6371; // 지구 반지름 (단위: km)
    var lat1 = pos1.getLat(), lon1 = pos1.getLng();
    var lat2 = pos2.getLat(), lon2 = pos2.getLng();
    var dLat = (lat2 - lat1) * (Math.PI / 180);
    var dLon = (lon2 - lon1) * (Math.PI / 180);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c; // 두 지점 사이의 거리 (단위: km)
    return distance;
  }

// 화면에 이동 거리 업데이트하는 함수
function updateDistance(distance) {
   document.getElementById('distanceValue').innerText = distance.toFixed(2); 
}

function startDriving() { 
   if (isDriving) return;
   startTime = new Date().getTime() - elapsedTime;
   timer = setInterval(updateTime, 1000); 
   isDriving = true;
} 

// 속력 계산 함수 
function calculateSpeed(distance, time) {  
     var speed=distance/(time/(1000*60*60));   
     return speed;  
}  

 function stopDriving(){    
      clearInterval(timer);  
      isDriving=false;   
 }   

 function resetDriving(){     
       clearInterval(timer);     
       elapsedTime=0;     
       totalDistance=0;
       document.getElementById('elapsedTime').innerHTML='0초';      
       document.getElementById('distanceValue').innerText='0.00';
       document.getElementById('speedValue').innerText='0.00';
       isDriving=false;   
 }
