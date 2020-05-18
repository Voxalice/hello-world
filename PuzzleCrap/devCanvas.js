var context=document.querySelector('canvas').getContext('2d');
var devC=new Object();
var colliders=[];

devC.version=1;
devC.makeCollision=function(firstX,firstY,secondX,secondY){
    context.fillRect(firstX,firstY,secondX,secondY);
    colliders.push([firstX,firstY,secondX,secondY])
}

