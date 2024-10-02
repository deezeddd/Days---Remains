function getCurrentYearLastDate() {
  const currentYear = new Date().getFullYear();
  const lastDate = new Date(currentYear, 11, 31); 
  return lastDate;
}
function updateTime() {
  const lastDate = getCurrentYearLastDate();
  const remainingTime = lastDate - new Date();
  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  if(document != null){
    document.getElementById(
      "time"
    ).innerHTML = `${days} days, ${hours} hours, ${seconds} seconds`; 
  }
}


updateTime();
setInterval(updateTime, 1000);
