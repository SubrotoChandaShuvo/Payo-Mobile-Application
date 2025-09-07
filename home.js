const validPin = 1234;

// functions to get input values
function getInputValueNumber(Id) {
  return parseInt(document.getElementById(Id).value);
}
function getInputValue(Id) {
  return document.getElementById(Id).value;
}
// function to get Inner text
function getInnerTextNumber(id){
    return parseInt(document.getElementById(id).innerText);
}
// function to set inner text
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

// Add money works
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");
    const bank = getInputValue("bank");
    const accountNumber = getInputValue("account-number");
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    // console.log(bank, accountNumber, amount, pin)

    // get the Available balance Do you have
    const availableBalance = getInnerTextNumber("available-balance");
    // console.log(availableBalance)

    // condition check
    if (accountNumber.length !== 11) {
      alert("Please Provide Your Valid Account Number");
      return;
    }
    if (validPin !== pin) {
      alert("Please Enter Your Valid Pin Number");
      return;
    }

    // add amount
    const totalNewAvailableBalance = amount + availableBalance;
    setInnerText("available-balance",totalNewAvailableBalance);
    alert("Add Money Successful.");

    // reset form
    document.getElementById("addMoneyForm").reset();
  });

// document.getElementById("cashOut-btn").addEventListener('click', function(){
//      window.location.href="./cashout.html"
// })

// toggling feature.
document.getElementById("addMoney-btn").addEventListener("click", function () {
  document.getElementById("addMoneyParent").style.display = "block";
  document.getElementById("cashOutParent").style.display = "none";
});
document.getElementById("cashOut-btn").addEventListener("click", function () {
  document.getElementById("cashOutParent").style.display = "block";
  document.getElementById("addMoneyParent").style.display = "none";
});

// CashOut Works
document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const agentNumber = getInputValue("agent-number");
    const cashOutAmount = getInputValueNumber("cashOut-amount");
    const cashOutPin = getInputValueNumber("cashOut-pin");

    const availableBalance = getInnerTextNumber("available-balance");

    if (agentNumber.length !== 11) {
      alert("Please Enter Valid Agent Number");
      return;
    }
    if (cashOutPin !== validPin) {
      alert("Please Enter Your Valid Pin Number");
      return;
    }
    if (availableBalance > cashOutAmount) {
      const totalNewAvailableBalance = availableBalance - cashOutAmount;
      setInnerText("available-balance",totalNewAvailableBalance);
      alert("Cash Out Successful.");
    } else {
      console.log("You Have Not Enough Money");
    }
    //   reset the form
    document.getElementById("cashOutForm").reset();
  });
