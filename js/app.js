//Product section starts here
//increment btn start
let incerementBTN = document.querySelector(`.product_qnty .incerement`);
let qty = document.querySelector(`.product_qnty .qty`);

function incerementing(){
    if(qty.value < 10){
    qty.value = Number(qty.value) + 1;
    }
}

incerementBTN.addEventListener(`click`, incerementing )
//increment btn ends
//decrement btn
let decrementBTN = document.querySelector(`.product_qnty .decrement`);

function decrementing(){
    if(qty.value > 1) {
        qty.value = Number(qty.value) - 1;
    }
    
}
decrementBTN.addEventListener(`click`, decrementing)
//decrement btn end
//Product section ends here