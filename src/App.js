import { useState } from "react";
import  './app.css'
import React from 'react'

function App() {

  const [input, setinput]= useState('100');
  const calculateResult = (input)=>{
    let result;

    try {
      const operators = ['+', '-', '/', '*', '%'] 
      let operator = null;

      for (let index = 0; index < input.length; index++) {
        if(operators.includes(input[index])){
          operator = input[index];
          break;
        }
        }

        if(!operator){
          setinput(parseFloat(input).toString());
          return;
        }

       const [operand1, operand2] = input.split(operator).map(parseFloat);
       let result;
       switch (operator) {
        case '+':
          result = operand1 + operand2
          break;
          
         case '-':
          result = operand1 - operand2
          break;
         case '*':
          result = operand1 * operand2
          break;
         case '/':
          result = operand1 / operand2
          break;

           case '%':
          result = operand1 % operand2
          break;
       
        default:
           throw new Error('invalid input')
          break;
       }
       setinput(result.toString());
      }

    
    catch (error) {
      setinput('Error')
    }
  }
  const handlebutton= (value)=>{
    if(value==='C'){
      setinput('')
    }
    else if(value==='>'){
      setinput(input.slice(0,-1));
    }
    else if(value ==='='){
      try {
        // setinput(eval(input).toString());   //one method to do this 

        /// second one 

        calculateResult(input);
      } catch (error) {
        setinput('Error')
      }
    }
    else {
      setinput(prevalue=>prevalue+value )
    }
  }
  
  return (
    <div className="container"> 
    <div className="calc">
    <h1>New app</h1>

      <h1 id="input">{input}</h1>
      <div>
        <button onClick={()=> handlebutton('C')}>C</button>
        <button onClick={()=> handlebutton('>')}>&lt;</button>
        <button onClick={()=> handlebutton('%')}>%</button>
        <button onClick={()=> handlebutton('/')}>/</button>
      </div>
      
      <div>
        <button onClick={()=> handlebutton('7')}>7</button>
        <button onClick={()=> handlebutton('8')}>8</button>
        <button onClick={()=> handlebutton('9')}>9</button>
        <button onClick={()=> handlebutton('*')}>*</button>
      </div>

       <div>
        <button onClick={()=> handlebutton('4')}>4</button>
        <button onClick={()=> handlebutton('5')}>5</button>
        <button onClick={()=> handlebutton('6')}>6</button>
        <button onClick={()=> handlebutton('-')}>-</button>
      </div>  
       <div>
        <button onClick={()=> handlebutton('1')}>1</button>
        <button onClick={()=> handlebutton('2')}>2</button>
        <button onClick={()=> handlebutton('3')}>3</button>
        <button onClick={()=> handlebutton('+')}>+</button>
      </div>  
       <div>
        <button onClick={()=> handlebutton('0')}>0</button>
        <button onClick={()=> handlebutton('00')}>00</button>
        <button onClick={()=> handlebutton('.')}>.</button>
        <button onClick={()=> handlebutton('=')}>=</button>
      </div>
    </div>
    </div>
  )
}

export default App

