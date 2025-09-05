// log in button functionality
document.getElementById("logInButton").addEventListener('click', function (e){
    e.preventDefault();
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById('mobile-number').value
    const pinNumberValue = document.getElementById('pin-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    const pinNumberValueConverted = parseInt(pinNumberValue)

    // console.log(mobileNumberValueConverted)
    // console.log(pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert('Invalid Credentials\nThere is no Database Connections so use 12345678910 as Mobile Number and use 1234 as Pin Number')
    }
})