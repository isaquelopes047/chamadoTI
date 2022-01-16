
function gerar(){
    
    var resp = document.querySelector('.numberTicket');
    resp.innerHTML = Math.floor(100000* Math.random());
}

window.onload = gerar;