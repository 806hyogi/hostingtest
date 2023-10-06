const calorieBurnRate=10;

if(isDriving){  
     const minutesElapsed=elapsedTime/(1000*60);       
     const burnedCalories=minutesElapsed*calorieBurnRate ;
     document.getElementById('caloriesBurned').innerText=burnedCalories.toFixed(2); 
}
