// thanx to florin for the function https://codepen.io/FlorinPop17/pen/KKpXqJd
const handleClick = (store,value) => {
  let { calc, lastPressed, operation, numbers, evaluate } = store.state;
  operation = Object.values(operation[0])
  numbers = Object.values(numbers[0])
  switch(value) {
    case 'C': {
      store.setState({
        calc: '0',
        evaluate: false,
      });
      break;
    }
      
    case '=': {
      const evaluated = eval(calc);
      store.setState({
        calc: evaluated,
        evaluate: true,
      });
      break;
    }
      
    case '.': 
      const splitted = calc.split(/[\+\-\*\/]/);

      const last = splitted.slice(-1)[0];
      
      if(!last.includes('.')) {
        store.setState({
          calc: calc+'.'
        })
      }
      
      break;
    
      
    default: {
      let e = undefined;
      // check for other operations
      if(operation.includes(value)) {
        if(operation.includes(lastPressed) && value !== '-') {
          // get the index of the last number and set a new operator
          const lastNumberIdx = calc.split('').reverse()
              .findIndex(char => char !== ' ' && numbers.includes(+char)); 
          e = calc.slice(0, calc.length - lastNumberIdx) + ` ${value} `;
        } else {
          e = `${calc} ${value} `;
        }
      } else {
        e = (calc === '0') ? `${value}` : (calc + `${value}`);
      }
      
      store.setState({
        calc: e,
        lastPressed: value,
        evaluate: false,
      });
    }
  
}}

export {handleClick}