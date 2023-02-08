let a;
let time;
let date;
 
const options = { month: "short", day: "numeric", year: "numeric" };

setInterval(() => {
    a = new Date();

    let hours = a.getHours();
    let minutes;
    let am_pm = hours>=12 ? 'PM' : 'AM';
    hours =  hours % 12;
    hours =  hours ?  hours : 12;
     minutes = minutes < 10 ? '0' + minutes : minutes;
  
//   time = a.getHours() % 12 || 12 + ":" + a.getMinutes() + ":" + a.getSeconds();
  
  
  time  = hours + ":" + a.getMinutes() + ":" + a.getSeconds() +" " +am_pm;
  date = a.toLocaleDateString(undefined, options);

  document.getElementById("TAD").innerHTML = "" + time + "<br>" + date;
}, 1000);

//using moment library

//  moment().format('MMMM Do YYYY, h:mm:ss a')
