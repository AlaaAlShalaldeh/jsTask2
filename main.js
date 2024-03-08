var registerForm=document.querySelector(".registerForm");
var result=document.querySelector(".result");
registerForm.onsubmit=function(e){
    e.preventDefault();
    var elements=e.target.elements;
    var amount=elements['amount'].value;
    if(elements['exchange'].value=='dollar'){
        result.innerHTML=amount/3.57;
    }
    else if(elements['exchange'].value=='dinar'){
        result.innerHTML=amount/5.04;
    }
    else {
        result.innerHTML=amount;
    }
}