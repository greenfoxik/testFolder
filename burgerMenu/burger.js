document.getElementById("result").onclick = getResult; // событие  onclick после нажатия на кнопку 
getResult();

function getResult(){
    
    var manu = document.getElementsByClassName('manu'); //собитие 
    var cost = 0;
    var kkal = 0;
    
    for ( var i = 0;  i < manu.length; i++){
         if (manu[i].checked) {
             
             cost += parseFloat (manu[i].getAttribute('data-cost'));
             kkal += parseFloat(manu[i].getAttribute('data-kkal'));
         }
      }
    
    document.getElementById('cost').innerHTML = cost;
    document.getElementById('kkal').innerHTML = kkal;
}