function generate(){
    let colour = '#';
    let clrCode = "0123456789ABCDEf";
    for(let i = 0; i < 6; i++){
       colour+= clrCode[Math.floor(Math.random()*16)]
    }
    let clr = document.getElementById("colorBoard");
    let code = document.getElementById("code");
    clr.style.backgroundColor = colour;
    code.innerHTML = colour;
    code.style.color = "black"
    
}