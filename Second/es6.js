let my = 10;

if(true)
{
    let my = 20;
}

console.log(my);

let calc = () => 45*45;
console.log(calc);

let multi = () =>
{
    return () => { }
}


function fetchdata(method)
{
method();
}
fetchdata(multi)

function fetchdata(method)
{
method();
}



