
let isopen = true;
const toogle = () => {
    if (isopen) {
        document.getElementById("state").style.display = "flex";
    }
    else {
        document.getElementById("state").style.display = "none";
    }
    isopen = !isopen;
}
// Reset display to flex when screen size is larger
window.addEventListener("resize", () => {
    if (window.innerWidth > 1160) {
        document.getElementById("state").style.display = "flex";
    }
});

const fullname = `Salwa Ansari`;
let index = 0;
const TypeWriter = () => {
    if (index < fullname.length) {
        document.getElementById("text").innerText += fullname[index];
        index++;
    }
    else {
        index = 0;
        document.getElementById("text").innerText = "";
    }
    setTimeout(TypeWriter, 300);
}
TypeWriter();
const animation = () => {
    // document.getElementById("state").style.display = "none";
    document.querySelector(".image").classList.add("rightanimation")
    document.querySelector(".aboutimage").classList.add("leftanimation")
    document.querySelector(".qualificationimage").classList.add("rightanimation")
    document.querySelector(".skillimage").classList.add("leftanimation")
    document.querySelector(".skillsbar").classList.add("rightanimation")
    document.querySelector(".projectList").classList.add("fadein")
    document.querySelector(".borderdark").classList.add("fadein")

    setTimeout(() => {
        document.querySelector(".image").classList.remove("rightanimation")
        document.querySelector(".aboutimage").classList.remove("leftanimation")
        document.querySelector(".qualificationimage").classList.remove("rightanimation")
        document.querySelector(".skillimage").classList.remove("leftanimation")
        document.querySelector(".skillsbar").classList.remove("rightanimation")
        document.querySelector(".projectList").classList.remove("fadein")
        document.querySelector(".borderdark").classList.remove("fadein")
    }, 2000)
}