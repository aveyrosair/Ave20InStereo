const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const upload = document.getElementById("upload");
const download = document.getElementById("download");

canvas.width = 1080;
canvas.height = 1080;

const frame = new Image();
frame.src = "frame.png";

let photo = null;

upload.addEventListener("change", (e) => {

    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();

    reader.onload = function(event){

        photo = new Image();

        photo.onload = drawCanvas;

        photo.src = event.target.result;

    }

    reader.readAsDataURL(file);

});

frame.onload = drawCanvas;

function drawCanvas(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(photo){

        ctx.drawImage(photo,0,0,1080,1080);

    }

    ctx.drawImage(frame,0,0,1080,1080);

}

download.addEventListener("click",()=>{

    const link=document.createElement("a");

    link.download="Ave20InStereo.png";

    link.href=canvas.toDataURL("image/png");

    link.click();

});
