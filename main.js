canvas=document.getElementById("myCanvas");
ctx=canvas.getContext ("2d");
color="red";
ctx.beginPath();
 ctx.strokeStyle= "black";
 ctx.lineWidth=1;
 ctx.rect(150,143,430,200);
 ctx.stroke();
 
 
 ctx.beginPath();
 ctx.strokeStyle="blue";
 ctx.lineWidth=5;
 ctx.arc (260,210,40,0,2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="black";
 ctx.lineWidth=5;
 ctx.arc (360,210,40,0,2*Math.PI);
 ctx.stroke();
 
 ctx.beginPath();
 ctx.strokeStyle="red";
 ctx.lineWidth=5;
 ctx.arc (460,210,40,0,2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="yellow";
 ctx.lineWidth=5;
 ctx.arc (300,250,40,0,2*Math.PI);
 ctx.stroke();

 ctx.beginPath();
 ctx.strokeStyle="green";
 ctx.lineWidth=5;
 ctx.arc (420,250,40,0,2*Math.PI);
 ctx.stroke();
 
 
