let cpf = document.querySelector("#cpf");

cpf.addEventListener("keypress", ()=>{
    let tamanhoCampo = cpf.value.length;
    if(tamanhoCampo == 3 || tamanhoCampo == 7){
        cpf.value += ".";
    } else if(tamanhoCampo == 11){
        cpf.value += "-";
    }
});

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}