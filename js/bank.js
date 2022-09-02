//Deposite
let inputDeposit = document.getElementById('input-deposit');
let depositedBalance = document.getElementById('deposit-balance');
let mainBalance = document.getElementById('main-balance');
let tableRow = document.querySelector('tbody');

document.getElementById('deposit-btn').addEventListener('click', (e)=>{
    let depositedBalanceText = parseFloat(depositedBalance.innerText);
    let inputDepositValue = parseFloat(inputDeposit.value);
    let mainBalanceText = parseFloat(mainBalance.innerText);
    
    if(isNaN(inputDeposit.value) || inputDeposit.value === ''){
        document.getElementById('warning').innerText = "Please input a vaild number"
    }else{
        document.getElementById('warning').innerText = "";
        //Add Balance on Deposit Section
    let totalDeposite = depositedBalanceText + inputDepositValue;
    depositedBalance.innerText = totalDeposite.toFixed(2);
    //Add Balance on Total Balance Section
    let mainBalanceTotal = mainBalanceText + inputDepositValue;
    mainBalance.innerText = mainBalanceTotal.toFixed(2);

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.innerText = 'Deposit'
    let td2 = document.createElement('td');
    td2.innerText = 'Success';
    td2.setAttribute('class', 'status')
    let td3 = document.createElement('td');
    td3.innerText = totalDeposite.toFixed(2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tableRow.appendChild(tr);


    inputDeposit.value ='';
    }
    
})
