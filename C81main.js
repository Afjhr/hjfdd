canvas=document.getElementById("Paint");
mrPen=canvas.getContext("2d");
color="red";
width=10;

mrPen.beginPath();
mrPen.strokeStyle=color;
mrPen.lineWidth=width;
mrPen.arc(200,200,20,0,1*Math.PI);
mrPen.stroke();

canvas.addEventListener("mousedown",my_titaniumwa);
function my_titaniumwa(e){

    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    mrPen.beginPath();
    mrPen.strokeStyle=color;
    mrPen.lineWidth=width;
    mrPen.arc(mouse_x,mouse_y,20,0,2*Math.PI);
    mrPen.stroke();
}