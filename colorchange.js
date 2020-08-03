// function myFunction(){
//     var str = document.getElementById('this').innerHTML;
//     var pos = str.search('occurs');
//     document.getElementById("this2").innerHTML=pos;
// }


console.log(y);

function change(){
    var colors=['yellow', 'red', 'blue', 'green', 'orange', 'purple', "#fff"];
    var y=Math.floor(Math.random()*((colors.length-1) - 0 + 1)) + 0;//This helps to generate random numbers between 0 & 5;
    document.body.style.backgroundColor=colors[y];
}
// function colorChange(){
//     var z=document.body.style;
//     z.backgroundColor=colors[y];
// }