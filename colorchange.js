function change(){
    var colors=['yellow', 'red', 'blue', 'green', 'orange', 'purple', "white", "#FF6347", "#FFA500", "#F0E68C", "#32CD32", "#9ACD32", "#00CED1", "#CD853F"];
    var y=Math.floor(Math.random()*((colors.length-1) - 0 + 1)) + 0;//This helps to generate random numbers between 0 & the maximum length of the array;
    document.body.style.backgroundColor=colors[y];
    if (document.body.style.backgroundColor=="white"){
        document.getElementById("this").style.color="#000";
    }
    else {
        document.getElementById("this").style.color="white";
    }
}
