const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
let inputDepositText = document.getElementById('input-deposit');
let inputWithdrawText = document.getElementById('input-withdraw');
let mainBalanceText = document.getElementById('main-balance');
let depositBalanceText = document.getElementById('deposit-balance');
let withdrawBalanceText = document.getElementById('withdraw-balance');

function textToNumber(input){
    let inputTextToNumber = parseFloat(input);
    return inputTextToNumber;
}

function updateBalance(inputAmount, balanceAmount, addBlance){
    let mainBalanceNumber = textToNumber(mainBalanceText.innerText);   
    if(addBlance === true){
        depositBalanceText.innerText = inputAmount + balanceAmount;
        mainBalanceText.innerText = mainBalanceNumber + inputAmount;
    }else{
        withdrawBalanceText.innerText = inputAmount + balanceAmount;
        mainBalanceText.innerText = mainBalanceNumber - inputAmount;
    }
}

function addTable(about, amount){
    let trParent = document.querySelector("tbody");
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = about;
    let td2 = document.createElement('td');
    td2.innerText = 'success';
    td2.setAttribute('class', 'status')
    let td3 = document.createElement('td');
    td3.innerText = amount;    
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    trParent.appendChild(tr);
}

//Diposit
depositBtn.addEventListener('click', ()=>{
    let inputDipositNumber  = textToNumber(inputDepositText.value);   
    if(inputDipositNumber > 0){
        let dInputNumber = textToNumber(inputDepositText.value);
        let dBalanceNumber = textToNumber(depositBalanceText.innerText);
        updateBalance(dInputNumber, dBalanceNumber, true);
        addTable("Deposit", dInputNumber);       
    }else{
        alert('error')
    }       
})

//Withdraw
withdrawBtn.addEventListener('click', ()=>{
    let inputWithdrawNumber  = textToNumber(inputWithdrawText.value);
    let mainBalanceNumber = textToNumber(mainBalanceText.innerText);
    if(inputWithdrawNumber > 0 && inputWithdrawNumber < mainBalanceNumber){
        let wInputNumber = textToNumber(inputWithdrawText.value);
    let wBalanceNumber = textToNumber(withdrawBalanceText.innerText);
    updateBalance(wInputNumber, wBalanceNumber, false);
    addTable("Withdraw", wInputNumber);
    }else{
        alert('error')
    }   
})