
function validate(){
    let returnVal = true;
    var name = document.forms["myForm"]["name"].value;
    var pass = document.forms["myForm"]["pass"].value;
    if (!(name == "Pri's22" )){
        document.getElementsByClassName("errorname")[0].innerHTML = "!Ahnn";
        returnVal = false;
    }else if(!(pass == "lumuku")){
        document.getElementsByClassName("errorname")[0,1].innerHTML = "!Ahnn";
        returnVal = false;
    }
    ;
    return returnVal;
}




