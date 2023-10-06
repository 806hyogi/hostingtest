//현재 위치로 이동하는 함수입니다.
function moveToCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        var lat = position.coords.latitude,
          lon = position.coords.longitude;
        currentPosition = new kakao.maps.LatLng(lat, lon);

        // 지도 중심을 현재 위치로 이동시킵니다
        map.setCenter(currentPosition);

      }, function (error) {
        console.log("Error occurred. Error code: " + error.code);
      },
        { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }


  function startWatching() {
    if (navigator.geolocation) {
      // 위치 업데이트를 주기적으로 수신하도록 watchPosition을 사용
      navigator.geolocation.watchPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var newLatLng = new kakao.maps.LatLng(lat, lon);


        if (isDriving) {
          if (polyline) {
            // 이미 폴리라인이 있으면 선을 그립니다.
            var path = polyline.getPath();
            path.push(newLatLng);
            polyline.setPath(path);
          } else {
            // 폴리라인이 없으면 새로운 폴리라인을 생성합니다.
            var path = [newLatLng];
            polyline = new kakao.maps.Polyline({
              path: path,
              strokeWeight: 5, // 폴리라인 두께 설정
              strokeColor: '#FF0000', // 폴리라인 색상 설정
              strokeOpacity: 0.7, // 폴리라인 투명도 설정
              map: map
            });
          }
        }



        // 이전 위치와 현재 위치를 이용하여 이동 거리 계산
        if (lastPosition) {
          var distance = calculateDistance(lastPosition, newLatLng);
          totalDistance += distance;
          updateDistance(totalDistance);
        }

        // 현재 위치로 지도의 중심을 이동하고 마커를 생성하여 표시
        map.setCenter(newLatLng);
        if (marker) {
          marker.setMap(null); // 이전 마커 제거
        }
        marker = new kakao.maps.Marker({
          position: newLatLng,
          map: map,
        });

        lastPosition = newLatLng; // 현재 위치를 이전 위치로 설정
      }, function (error) {
        console.log("Error occurred. Error code: " + error.code);
      }, { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }