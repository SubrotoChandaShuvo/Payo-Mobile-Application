const validPin = 1234;

// Add money works
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("add money btn clicked");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    // console.log(bank, accountNumber, amount, pin)

    // get the Available balance Do you have
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(availableBalance)

    // condition check
    if (accountNumber.length < 11) {
      alert("Please Provide Your Valid Account Number");
      return;
    }
    if (validPin !== pin) {
      alert("Please Enter Your Valid Pin Number");
      return;
    }

    // add amount
    const totalNewAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
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
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutAmount = parseInt(
      document.getElementById("cashOut-amount").value
    );
    const cashOutPin = parseInt(document.getElementById("cashOut-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (agentNumber.length < 11) {
      alert("Please Enter Valid Agent Number");
      return;
    }
    if (cashOutPin != validPin) {
      alert("Please Enter Your Valid Pin Number");
      return;
    }
    if(availableBalance>cashOutAmount){
    const totalNewAvailableBalance = availableBalance - cashOutAmount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
    }
    else{
        console.log('You Have Not Enough Money');
    }
  });
