function secretAvailableFundsNotificationFromDenham(accountBalanceAmountInCents){
  var accountBalanceAmount = accountBalanceAmountInCents / 100;
  var formattedAccountBalance = zarString(accountBalanceAmountInCents);
  if (accountBalanceAmount < 500) {
    return 'Easy there tiger';
  }
  else if (accountBalanceAmount < 1500){
    return 'It better be the end of the month';
  }
  else if(accountBalanceAmount < 4000){
    return 'Keep it tight playa';
  }
  else if (accountBalanceAmount < 6000){
    return "Girl, you good";
  }
  else {
    return 'Make it rain baby! Whew!\nYou\'re still rolling in \n' + formattedAccountBalance; 
  }
}

function secretAvailableFundsNotificationFromAPoshButler(accountBalanceAmountInCents){
  var accountBalanceAmount = accountBalanceAmountInCents / 100;
  var formattedAccountBalance = zarString(accountBalanceAmountInCents);
  if (accountBalanceAmount < 500) {
    return 'Oh dear...';
  }
  else if (accountBalanceAmount < 1500){
    return 'Better call mumsie';
  }
  else if(accountBalanceAmount < 4000){
    return 'Watch thy pocket';
  }
  else if (accountBalanceAmount < 6000){
    return "No need to sell the yacht yet chap";
  }
  else {
    return 'Investments are absolutely fabulous my dear boy\n' + formattedAccountBalance; 
  }
}

function secretAvailableFundsNotificationFromAnAussie(accountBalanceAmountInCents){
  var accountBalanceAmount = accountBalanceAmountInCents / 100;
  var formattedAccountBalance = zarString(accountBalanceAmountInCents);
  if (accountBalanceAmount < 500) {
    return 'Yea really down under neow';
  }
  else if (accountBalanceAmount < 1500){
    return 'Looking skimp, mate';
  }
  else if(accountBalanceAmount < 4000){
    return 'Yea done it neow, mate';
  }
  else if (accountBalanceAmount < 6000){
    return "Sweet az, She\'ll be right";
  }
  else {
    return 'Facking good onya, cunt\n' + formattedAccountBalance; 
  }
}

function secretAvailableFundsNotificationFromASassyIndependentWomen(accountBalanceAmountInCents){
  var accountBalanceAmount = accountBalanceAmountInCents / 100;
  var formattedAccountBalance = zarString(accountBalanceAmountInCents);
  if (accountBalanceAmount < 500) {
    return 'Nigga you broke';
  }
  else if (accountBalanceAmount < 1500){
    return 'Yall better start sucking dick for money;
  }
  else if(accountBalanceAmount < 4000){
    return 'Get the food coupons ready';
  }
  else if (accountBalanceAmount < 6000){
    return "yeaah baby";
  }
  else {
    return 'Hey Suga Daddy\n' + formattedAccountBalance; 
  }
}
