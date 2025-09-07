const validPin = 1234;
const couponCode = 3456;
const transactionData = [];

// functions to get input values
function getInputValueNumber(Id) {
  return parseInt(document.getElementById(Id).value);
}
function getInputValue(Id) {
  return document.getElementById(Id).value;
}
// function to get Inner text
function getInnerTextNumber(id) {
  return parseInt(document.getElementById(id).innerText);
}
// function to set inner text
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// handle button Toggle
function handleBtnToggle(id) {
  const btnForms = document.getElementsByClassName("form-btn");
  for (const form of btnForms) {
    form.classList.remove("border-[#0874f2]", "bg-[#0874f20c]");
    form.classList.add("border-gray-200");
  }
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20c]");
  document.getElementById(id).classList.remove("border-gray-200");
}



// document.getElementById("cashOut-btn").addEventListener('click', function(){
//      window.location.href="./cashout.html"
// })

// toggling feature.
document.getElementById("addMoney-btn").addEventListener("click", function () {
  handleToggle("addMoneyParent");
  handleBtnToggle("addMoney-btn");
});
document.getElementById("cashOut-btn").addEventListener("click", function () {
  handleToggle("cashOutParent");
  handleBtnToggle("cashOut-btn");
});

document.getElementById("Transfer-btn").addEventListener("click", function () {
  handleToggle("transferMoneyParent");
  handleBtnToggle("Transfer-btn");
});

document.getElementById("bonus-btn").addEventListener("click", function () {
  handleToggle("getBonusParent");
  handleBtnToggle("bonus-btn");
});

document.getElementById("payBill-btn").addEventListener("click", function () {
  handleToggle("payBillParent");
  handleBtnToggle("payBill-btn");
});
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    handleToggle("transactionParent");
    handleBtnToggle("transaction-btn");
  });




// Latest Payment Show

    const transactionContainer = document.getElementById("latest-payment");
    // transactionContainer.innerText = "";

    for(let i = transactionData.length - 1; i >= 0; i--)
    {
        const data = transactionData[i];
        const div = document.createElement("div");
        div.innerHTML = `
        <div
            class="bg-white rounded-2xl p-3 mt-3 flex justify-between items-center"
          >
            <div class="flex">
              <div class="p-4 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" />
              </div>
              <div class="ml-3">
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-[12px] mt-1">${data.date} ${data.time}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        `
        transactionContainer.appendChild(div);
    }




// Add money works
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("add money btn clicked");
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
    if(amount <=0){
        alert("Invalid Amount!");
        return;
    }
    // add amount
    const totalNewAvailableBalance = amount + availableBalance;
    setInnerText("available-balance", totalNewAvailableBalance);
    alert("Add Money Successful.");

    // reset form
    document.getElementById("addMoneyForm").reset();

    const data = {
      name: "Add Money",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString() 
    };
    transactionData.push(data);
    // console.log(transactionData)
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
    if(cashOutAmount<=0){
        alert("Invalid Amount!");
        return;
    }
    if (availableBalance > cashOutAmount) {
      const totalNewAvailableBalance = availableBalance - cashOutAmount;
      setInnerText("available-balance", totalNewAvailableBalance);
      alert("Cash Out Successful.");
    } else {
      console.log("You Have Not Enough Money");
    }
    //   reset the form
    document.getElementById("cashOutForm").reset();

    const data = {
      name: "Cash Out",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString() 
    };
    transactionData.push(data);
    // console.log(transactionData)
});
// Transfer Money Works
document
  .getElementById("transfer-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const userAccountNumber = getInputValue("account-number");
    const transferAmount = getInputValueNumber("transfer-amount");
    const transferPin = getInputValueNumber("transfer-pin");

    const availableBalance = getInnerTextNumber("available-balance");

    if (userAccountNumber.length !== 11) {
      alert("Please Enter Valid User Account Number");
      return;
    }
    if (transferPin !== validPin) {
      alert("Please Enter Your Valid Pin Number");
      return;
    }
    if(transferAmount <=  0){
        alert("Invalid Amount!");
        return;
    }
    if (availableBalance > transferAmount) {
      const totalNewAvailableBalance = availableBalance - transferAmount;
      setInnerText("available-balance", totalNewAvailableBalance);
      alert("Cash Out Successful.");
    } else {
      console.log("You Have Not Enough Money");
    }
    //   reset the form
    document.getElementById("cashOutForm").reset();

    const data = {
      name: "Cash Out",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString() 
    };
    transactionData.push(data);
    // console.log(transactionData)
});
//   Get Bonus work
document
.getElementById("get-bonus-btn")
.addEventListener("click", function (e) {
    e.preventDefault();
    const coupon = getInputValueNumber("get-bonus-coupon");
    
    const availableBalance = getInnerTextNumber("available-balance");
    
    if (coupon !== couponCode) {
        alert("Please Enter Valid Coupon Code");
        return;
    } else {
        const totalNewAvailableBalance = availableBalance + 500;
        setInnerText("available-balance", totalNewAvailableBalance);
        alert("Congratulations You Get The Bonus");
    }
    //   reset the form
    document.getElementById("pay-bill-form").reset();
    
    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString(),
    };
    transactionData.push(data);
    

  });

//   pay bill work
document.getElementById("pay-bill-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const accountNumber = getInputValue("biller-account-number");
  const payBillAmount = getInputValueNumber("amount-to-pay");
  const payBillPin = getInputValueNumber("pay-bill-pin");

  const availableBalance = getInnerTextNumber("available-balance");

  if (accountNumber.length !== 11) {
    alert("Please Enter Valid Biller Account Number");
    return;
  }
  if (payBillPin !== validPin) {
    alert("Please Enter Your Valid Pin Number");
    return;
  }
  if (availableBalance > payBillAmount) {
    const totalNewAvailableBalance = availableBalance - payBillAmount;
    setInnerText("available-balance", totalNewAvailableBalance);
    alert("Pay Bill Successful.");
  } else {
    console.log("You Have Not Enough Money");
  }
  //   reset the form
  document.getElementById("pay-bill-form").reset();

    const data = {
      name: "Pay Bill",
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString() 
    };
    transactionData.push(data);
});
// Transaction work
document.getElementById("transaction-btn").addEventListener("click",function(){
    const transactionContainer = document.getElementById("transaction-container");
    transactionContainer.innerText = "";

    for(const data of transactionData)
    {
        const div = document.createElement("div");
        div.innerHTML = `
        <div
            class="bg-white rounded-2xl p-3 mt-3 flex justify-between items-center"
          >
            <div class="flex">
              <div class="p-4 rounded-full bg-[#f4f5f7]">
                <img src="./assets/wallet1.png" alt="" />
              </div>
              <div class="ml-3">
                <h1 class="font-bold">${data.name}</h1>
                <p class="text-[12px] mt-1">${data.date} ${data.time}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        `
        transactionContainer.appendChild(div);
    }
})

// work for log out
document.getElementById("log-out-btn").addEventListener("click",function(){
    window.location.href = "./index.html"
})