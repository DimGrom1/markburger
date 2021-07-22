let left = document.querySelector("#left")
let dist = 0
let right = document.querySelector("#right")
let slider = document.querySelector(".slider")
console.log(left);
left.onclick = function (event) {
    event.preventDefault()
    dist = dist-100
    console.log(dist)
    if(dist<0){
       dist = (slider.children.length-1)*100
    }
    slider.style.transform="translateX(-"+dist+"%)"
}
right.onclick = function(event) {
    event.preventDefault()
    // console.log("Силя:быстро за дримирсом в магазин.Я:щас 24:00.Силя:мне всеровно быстро за дримирсом.")
    dist=dist+100
    dist=dist%(slider.children.length*100)
    console.log(dist);
    slider.style.transform="translateX(-"+dist+"%)"
}