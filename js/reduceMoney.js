document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const reduceMoney=document.getElementById('cash-out-amount').value;
    const cashOutNumber=parseFloat(reduceMoney);
    const cashOutPin=document.getElementById('cash-out-pin').value;

    if(cashOutPin==='1234'){
        console.log('Money is Reducing');
        const mainBalance=document.getElementById('main-balance').innerText;
        const availableBalance=parseFloat(mainBalance);
        const newBalance=availableBalance-cashOutNumber;
        document.getElementById('main-balance').innerText=newBalance;
    }

   

})