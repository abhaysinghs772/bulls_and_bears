`use strict`

// variables
const initial_Price_Of_Stocks = document.querySelector('#initial_price');
const Quantity_Of_Stocks = document.querySelector('#Quantity_Of_Stocks');
const Current_Price_Of_Stocks = document.querySelector('#current_price');
const check_button = document.querySelector('#tell_me');
let resultRef = document.querySelector('.result');

// function : Calculate Profit and Proft Percentage
function profitAndProfitPercentage() {
    let costPrice = Number(initial_Price_Of_Stocks.value);

    // calculate Profit Per share
    let profitPerShare = (Number(Current_Price_Of_Stocks.value) - costPrice) * Number(Quantity_Of_Stocks.value);

    // calculate profit_percentage
    let profitPercentage = ((profitPerShare / costPrice) * 100);

    return [profitPerShare, profitPercentage];
}

// function : Calculate Loss and Loss Percentage
function lossAndLossPercentage() {
    let costPrice = Number(initial_Price_Of_Stocks.value);

      // calculate Loss Per Share
    let lossPerShare = (Number(Current_Price_Of_Stocks.value) - costPrice) * Number(Quantity_Of_Stocks.value);

    // calculate Loss_percentage
    let lossPercentage = ((lossPerShare / costPrice) * 100);

    return [lossPerShare, lossPercentage];
}

//Event: DOM Loaded
function clickHandeler(e) {

    // calculate profit 
    let res = Number(Current_Price_Of_Stocks.value) - Number(initial_Price_Of_Stocks.value);
    if (res > 0) {
        // calculate profit and profit percentage
        // console.log(profitAndProfitPercentage());
        let [profitPerShare, profitPercentage] = profitAndProfitPercentage();

        resultRef.innerText = `Hey, the profit is ${profitPerShare.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)} %`;
    } else {
        // calculate loss and loss percentage
        let [lossPerShare, lossPercentage] = lossAndLossPercentage(res);

        resultRef.innerText = `Hey, the loss is ${lossPerShare.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)} %`;
    }

    if (res === 0) {
        // no profit no loss
        resultRef.innerText = `No pain no gain and no gain no pain`;
    }
}

check_button.addEventListener('click', clickHandeler);