let counter = 0 ;
const getData = function(){
    console.log("fetching data...."+counter++);
}

const doSomeMagic = function (fn,delay){
    let timer ;
    return function(){
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        },delay)
    }
}

const debounce =doSomeMagic(getData,2000)

