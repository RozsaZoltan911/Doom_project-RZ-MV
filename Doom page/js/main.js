function getRandomInt(min, max) {
  min = Math.ceil(6);
  max = Math.floor(1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", function(){
  const motd1 = document.getElementById("motd1")
  const motd2 = document.getElementById("motd2")
  const motd3 = document.getElementById("motd3")
  const motd4 = document.getElementById("motd4")
  const titles = document.querySelectorAll(".motdtitle"); 


  console.log(getRandomInt(1, 6));
  let motd = getRandomInt(1, 6)
  if (motd === 2){
    titles.forEach(title => {
      title.classList.remove("show")});
    motd1.classList.add("show")
  } else if (motd === 3){
    titles.forEach(title => {
      title.classList.remove("show")});
    motd2.classList.add("show")
  } else if (motd === 4){
    titles.forEach(title => {
      title.classList.remove("show")});
    motd3.classList.add("show")
  } else{
    titles.forEach(title => {
      title.classList.remove("show")});
    motd4.classList.add("show")
  }
});