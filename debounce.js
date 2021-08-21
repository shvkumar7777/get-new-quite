let deBounce = function(fn,delay){
    let timeoutID;
    return function(...args){
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(()=>{
            fn(...args);
        },delay)
    }
}

document.getElementById("new_button").addEventListener("click",deBounce((e)=>console.log("button clicked"),2000));
