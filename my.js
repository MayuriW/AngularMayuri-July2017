var name = "mayuri";
console.log(name); 

var mobiles = ['window','moto'];
for(var i=0 ; i<mobiles.length;i++)
{
    console.log(mobiles[i]);


    
}

var x;
function mycall(x)
{
    console.log("function called"+x);
}

mycall(5);

var jsObject = {name:'mayuri',age:26, apps : function()
{
    console.log("call function in object")
}
};

console.log(jsObject.name);

console.log(jsObject.age);

jsObject.apps(4);


function takeParam(var1,var2)
{
    console.log(var1*var2)
}

takeParam(3,2);