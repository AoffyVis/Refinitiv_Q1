import './Container.css';
import { useEffect, useState } from 'react';

function Container() {
  const [number, setNumber] = useState(0);
  const [checkType, setCheckType] = useState("isPrime");
  const [checkTrueFalse, setCheckTrueFalse] = useState("#####");

  const inputNumber = (e) => {
    let num = e.target.value;
    if (num < 0) {
      setNumber(1);
    }
    else if ((num % 1) !== 0) {
      num = Math.round(num);
      setNumber(num);
    }
    else {
      setNumber(num);
    }
  }

  const inputType = (e) => {
    setCheckType(e.target.value);
  }

  useEffect(() => {
    const type = checkType;
    // Prime Number
    var prime = number !== 1;
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        prime = false;
        break;
      }
    }
    //END Prime Number

    //Fibonacci Number
    // A utility function that returns true if x is perfect square
    const isPerfectSquare = (x) => {
      let s = parseInt(Math.sqrt(x));
      return (s * s === x);
    }

    // Returns true if n is a Fibonacci Number, else false
    const isFibonacci = (n) => {
      // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
      // is a perfect square
      return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
    }
    const checkFibonacci = isFibonacci(number);
    // END Fibonacci Number

    if (type === "isPrime") {
      setCheckTrueFalse(prime.toString());
    }
    else {
      setCheckTrueFalse(checkFibonacci.toString());
    }
  }, [number, checkType])

  return (
    <>
      <div className='container'>
        <div className='first_column'>
          <input type="number" name="number" onChange={inputNumber} />
        </div>
        <div className='middle_column'>
          <select onChange={inputType}>
            <option value="isPrime">isPrime</option>
            <option value="IsFibanacci">IsFibanacci</option>
          </select>
        </div>
        <div className='last_column'>
          <span className="checker">{checkTrueFalse}</span>
        </div>
      </div>
    </>
  );
}

export default Container;
