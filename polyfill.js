let names = {
    firstName: "dasoju",
    lastName: "Shiva Kumar"
}

let printnames = function(city,area){
    console.log(this.firstName+""+this.lastName+city+""+area);
}

let validname  = printnames.bind(names,"bombay");
validname("dharavi");

//create a polyfill for the bind, means create a method which should work just like bind(), what are the charactertsitcs of bind menthod is 
Function.prototype.myBind = function(...args){
    const obj = this;
    const params = args.slice(1);
    return function(...n){
        obj.apply(args[0],[...params,...n]);
    }
}
let validName2 = printnames.myBind(names,"Hyderabad");
validName2("Hanuman Nagar");