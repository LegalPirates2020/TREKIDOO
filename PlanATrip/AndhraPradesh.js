// dropdown button
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
var finalselect = null;
const secondselect = document.querySelector(".fifthday");
const thirdselect = document.querySelector(".eighthday");
const secondcontainer = document.querySelector(".secondcontainer");
const no1 = document.querySelector(".no1");
const no2 = document.querySelector(".no2");
const no3 = document.querySelector(".no3");
const no4 = document.querySelector(".no4");
const no5 = document.querySelector(".no5");
const no6 = document.querySelector(".no6");
const no7 = document.querySelector(".no7");
const no8 = document.querySelector(".no8");
const no9 = document.querySelector(".no9");
const no10 = document.querySelector(".no10");
const no11 = document.querySelector(".no11");

const innerContainer = document.querySelector(".innercontainer");
const before = window.getComputedStyle(
  document.querySelector(".innercontainer"),
  ":before"
);

const optionsList = document.querySelectorAll(".option");
//open and close
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

//Add element
optionsList.forEach((o) => {
  o.addEventListener("click", function states() {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    finalselect = selected.innerHTML;

    // console.log(finalselect)

    // code for showing the wanted info
    //getting button id

    var btn = document.getElementById("button");
    var firstday = "FourDays";
    var fifthday = "SevenDays";
    var seventhday = "ElevenDays";
    btn.onclick = function clicker() {
      switch (finalselect) {
        case firstday:
          window.location.href = "#secondcontainer";
          break;
        case fifthday:
          window.location.href = "#secondcontainer";
          secondselect.style.display = "flex";
          break;

        case seventhday:
          window.location.href = "#secondcontainer";
          secondselect.style.display = "flex";
          thirdselect.style.display = "flex";
          break;
      }
    };
  });
});

//background change
function hoverbg(card, url) {
  card.addEventListener("mouseover", () => {
    secondcontainer.style.backgroundImage = `url(${url})`;
  });
  card.addEventListener("mouseout", () => {
    secondcontainer.style.backgroundImage =
      'url("../States/img/Andhra/rishikonda_beach/rishikonda_beach1.jpg"")';
  });
}

hoverbg(no1, "../States/img/Andhra/ahobilam_temple/ahobilam_temple1.jpg");
hoverbg(no2, "../States/img/Andhra/belum_caves/belum_caves1.jpg");
hoverbg(no3, "../States/img/Andhra/borra_caves/borra_caves1.jpg");
hoverbg(no4, "../States/img/Andhra/ins_museum/ins_museum1.jpg");
hoverbg(no5, "../States/img/Andhra/kailasagiri/kailasagiri1.jpg");
hoverbg(no6, "../States/img/Andhra/rishikonda_beach/rishikonda_beach4.jpg");
hoverbg(no7, "../States/img/Andhra/tada_falls/tada_falls1.jpg");
hoverbg(no8, "../States/img/Andhra/thirumala/tirumala_temple1.jpg");
hoverbg(no9, "../States/img/Andhra/belum_caves/belum_caves2.jpg");
hoverbg(no10, "../States/img/Andhra/kailasagiri/kailasagiri2.jpg");
hoverbg(no11, "../States/img/Andhra/rishikonda_beach/rishikonda_beach3.jpg");

//navbar

const menu = document.querySelector(".menu");
const nav_container = document.querySelector(".nav-container");
let menuopen = false;

window.addEventListener("scroll", () => {
  iffalse();
});

// Menu

function iftrue() {
  menu.classList.add("open");
  nav_container.style.top = "0";
  menuopen = true;
  innerContainer.style.display = "none";
  before.display = "none";
}
function iffalse() {
  menu.classList.remove("open");
  nav_container.style.top = "-150vh";
  menuopen = false;
  innerContainer.style.display = "flex";
}
menu.addEventListener("click", () => {
  if (!menuopen) {
    iftrue();
  } else {
    iffalse();
  }
});
nav_container.addEventListener("click", () => {
  iffalse();
});

// no1.addEventListener('mouseover',()=>{
//   secondcontainer.style.backgroundImage= 'url("../Images/winter-cold-memento-mori-wallpaper-preview.jpg")';
// })

// no1.addEventListener('mouseout',()=>{
//   secondcontainer.style.backgroundImage= 'url("../Images/borracaves1.jpg")';
// })
