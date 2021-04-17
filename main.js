function getPara1(){
    var inputs = [];
    for(var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("input"+i).value);
    }
    document.getElementById("showPara1").innerHTML = inputs.join(" ");
}

function getPara2(){
    var inputs = [];
    for(var i = 7; i <= 12; i++){
        inputs.push(document.getElementById("input"+i).value);
    }
    document.getElementById("showPara2").innerHTML = inputs.join(" ");
}