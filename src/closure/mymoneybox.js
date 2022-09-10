// function moneyBox(coins) {
//   let saveCoinst = 0;
//   saveCoinst += coins;
//   console.log(`MoneyBox: $${saveCoinst}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let saveCoinst = 0;

  function countCoins(coins) {
    saveCoinst += coins;
    console.log(`MoneyBox: $${saveCoinst}`);
  }

  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);
