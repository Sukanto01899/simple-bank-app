
//Redirect Login to bank
document.getElementById('submit-btn').addEventListener('click', (e)=>{
    e.preventDefault()
    const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
    if(inputUsername.value === '' || inputPassword.value === ''){
        alert('Input field can not be empty');
    }else{
        window.location.href = 'my-bank.html';
    }
    
})

