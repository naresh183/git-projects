
var create = document.createElement("img");
create.setAttribute("src","https://themewagon.github.io/haircut/img/carousel-1.jpg")
var target = document.getElementById("carosel")
target.append(create)

var carosel = [
    "https://themewagon.github.io/haircut/img/carousel-1.jpg",
    "https://themewagon.github.io/haircut/img/carousel-2.jpg"
]
var count = 0;

setInterval(()=>{
    if(count<carosel.length){
        create.src = carosel[count];
        count++
    }
    else{
        count=0;
    }
},2000)


function pagess(src){
    window.location=src;
}



function previous(){
    count++;
    if(count>=carosel.length){
        count=0;
    }
    create.src = carosel[count]
}
function next(){
    count--;
    if(count<0){
        count = carosel.length-1;
    }
    create.src = carosel[count]
}

