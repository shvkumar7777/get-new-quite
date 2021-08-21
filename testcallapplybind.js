let names = {
    firstName: "dasoju",
    lastName: "Shiva Kumar"
}

let printnames = function printname (){
    console.log(this.firstName+""+this.lastName);
}

let validname  = printnames.bind(names);
validname();

// call apply bind are three menthods on an object which will call the function on that object to get the properties

Function.prototype.mybind = function(){
    return function(){
        console.log("mybind ");
    }
}

