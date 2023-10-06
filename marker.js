var marker;

function updateMarker(newLatLng) {
    if (marker) {
        marker.setMap(null);
    }
    marker = new kakao.maps.Marker({
        position: newLatLng,
        map: map,
    });
}
