// Write your JavaScript here


//function for button goes here
function handleClickEvent(){  

  //create a variable for what is due and what is received

  var amountdue = parseFloat($("#amount-due").val());
  var amountrecieved = parseFloat($("#amount-received").val());

  // variable for money
  var distribution = {
    dollar: 100,
    quarter: 25,
    dime: 10,
    nickle: 5,
    penny: 1,
  }
 
  // 3. Create a variable that gives the result of what the customer gave and the sales price.
 
  // ex     979  = (20 - 10.21) * 100
  var difference = (amountrecieved - amountdue) * 100;


  // 4. distribution of dollars,quarters,dimes,nickels,pennys goes under here

  // ex     9 =                979 / 100                     
  var dollars = parseInt(difference/distribution.dollar);

  // ex 79   =       979 - (9 * 100)
  difference = difference - (dollars * distribution.dollar);

  // ex     3  =              79 / 25
  var quarters = parseInt(difference/distribution.quarter);

  // ex   4 =          79 - (3 * 25)
  difference = difference - (quarters * distribution.quarter);

  // ex   0 =                  4 / 10
  var dimes = parseInt(difference/distribution.dime)
  // ex   4 =          4 - (0 * 10)
  difference = difference - (dimes * distribution.dime);
//  ex   0   =              4/5
  var nickles = parseInt(difference/distribution.nickle)
  // 4 =       4 -(0 * 5)
  difference = difference - (nickles * distribution.nickle);


  var pennys = Math.round(difference/distribution.penny)

  // 5. Create your outputs for the above

  $('#dollars-output').text(dollars);
  $('#quarters-output').text(quarters);
  $('#dimes-output').text(dimes);
  $('#nickels-output').text(nickles);
  $('#pennies-output').text(pennys);
}

// 6. Create button

$('#calculate-change').click(handleClickEvent);


