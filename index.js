const saturdayFun = (activity = 'roller-skate') => {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity = 'go to the office') => {
  return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (symbol = '*') => {
  return (adjective = 'special') => {
    return `You are ${symbol}${adjective}${symbol}!`;
  }
}

const Calculator = {
  add : (a ,b) =>  a + b,
  subtract : (a ,b) =>  a - b,
  multiply : (a ,b) =>  a * b,
  divide : (a ,b) =>  a / b,
}

const actionApplyer = (start, fn_array) => {
  for (let i = 0; i < fn_array.length; i++) {
    start = fn_array[i](start);    
  }
  return start;
}
