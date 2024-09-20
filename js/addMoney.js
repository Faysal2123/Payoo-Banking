document.getElementById('add-money-btn').addEventListener('click',function(event){
    console.log('btn clicked')
    event.preventDefault();
    const pinNumber=document.getElementById('input-pin-number').value;
    const addMoney=document.getElementById('input-add-money').value;
    const addMoneyNumber=parseFloat(addMoney);

    if(pinNumber==='1234'){
        console.log('money added your account')
        const mainBalance=document.getElementById('main-balance').innerText;
        const balance=parseFloat(mainBalance);
        const newBalance=balance+addMoneyNumber;
        document.getElementById('main-balance').innerText=newBalance;

    }
    else{
        console.log('Failed to cash in.please try again letter.')
    }
    


})