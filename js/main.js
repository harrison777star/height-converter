  
        var feetQuery = document.querySelector(".feet");
        
        var inchQuery = document.querySelector(".inches");
        
        var output = document.querySelector(".result");
        
        var calcBtn = document.querySelector("button").addEventListener("click", function(){
        if(feetQuery.value == "" || inchQuery.value == ""){
          alert("Please fill in all form")
}
        else{
        var feet = +feetQuery.value * 12;

        var inches = +inchQuery.value;

        var converter = 2.54;

        var result = Math.floor((feet + inches) * converter) +"cm";

output.innerHTML = result;
}

});