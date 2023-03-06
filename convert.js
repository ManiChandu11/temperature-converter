let celsius=document.getElementById("celsius")
let farenhit=document.getElementById("farenhit")
function celTofar(){
    let output=(parseFloat(celsius.value)*9/5)+32;
    farenhit.value=parseFloat(output.toFixed(2));
}
function farTocel(){
    let output=(parseFloat(farenhit.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
}