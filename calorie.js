var calorieBurnRate = 10; // 1분당 소모 칼로리 (단위: kcal)

if (isDriving) { // 주행 중일 때만 속도 계산 및 화면 업데이트

    // 1분당 소모 칼로리 계산
    var minutesElapsed = elapsedTime / (1000 * 60); // 경과 시간을 분 단위로 변환
    var burnedCalories = minutesElapsed * calorieBurnRate; // 1분당 소모 칼로리 계산
    document.getElementById('caloriesBurned').innerText = burnedCalories.toFixed(2); // 소모 칼로리를 화면에 표시
}