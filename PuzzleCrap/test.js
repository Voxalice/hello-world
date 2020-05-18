for(i=0; i<amountofbubs; i++) {
    e=$(".a").clone();
    $(e).insertAfter(".a");
    document.querySelector("#load").textContent="Try clicking on these bubbles!"
}

function a(){
    if(bub==amountofbubs+2){
        document.querySelector("#load").textContent="Wow! Guess you didn't have much else to do."
    }
}

setInterval(a,50);