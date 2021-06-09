function digitalClock() {
  let date = new Date();
  let hours = date.getHours(); //0-23
  let minutes = date.getMinutes(); 
  let seconds = date.getSeconds(); 
  let timeFormat = 'AM'

   
if (hours === 12) {       //12 tar besi hole seta PM hbe
  timeFormat="PM"
}
else if (hours === 0) {
  hours = 12;
}
else {
  hours;
  timeFormat = "AM"
  }

if (hours>12) {   //tarnary operator use korle short hbe
  hours = hours - 12
  timeFormat = "PM"
  }
  else {
  hours;
  timeFormat = "AM"
}

  hours < 10 ? hours = '0' + hours : hours
  minutes < 10 ? minutes = '0' + minutes : minutes;
  seconds < 10 ? seconds = '0' + seconds : seconds;

let finalTime = `${hours}:${minutes}:${seconds}`
document.getElementById('time').innerHTML = finalTime
document.querySelector('small').innerHTML=timeFormat 
setInterval(digitalClock, 1000)    

  }

  
digitalClock()


//commit
