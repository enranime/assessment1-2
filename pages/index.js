import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React,{useState} from 'react';

export default function Home() {

  const [input,setInput] = useState();
  const [select,setSelect] = useState("isprime");
  
  
  const handleInput = (e) => {
      const inputData = e.target.value;
      const regex = /[a-zA-Z]+/g
      const isChar = regex.test(inputData);
      if(isChar){
        setInput('');
      }else{
         setInput((inputData));
        
      }
  }

  const handleBlur = () => {

      if(input < 0 ){
        setInput(1)
      }else{

      setInput(Math.round(input));
      }
  }
  
  const handleSelect = (e) => {
    setSelect(e.target.value)
    console.log(e.target.value)
  }

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  const isFibonacci =(num) => {
    const firstCase = (5*num*num + 4);
    const secondCase = (5*num*num - 4);
    const firstCaseSQRT = Math.sqrt(firstCase);
    const secondCaseSQRT = Math.sqrt(secondCase); 
    const isFibo = (firstCase === firstCaseSQRT*firstCaseSQRT)&&(secondCase === secondCaseSQRT*secondCaseSQRT)
  
    return isFibo;

  }

  const FiboPrime =() => {
    let test;

    if(select === "isprime"){
       test = isPrime(input)
    }else if(select === "isfibonacci"){
       test = isFibonacci(input)
    }
    
    return test.toString();
    
  }


  return (

    <div className="flex flex-row min-h-screen">
      
      <div className="w-[200px] border-solid border-2 border-black flex-none">
        <input className="w-[80%] border-solid border border-black" onChange={handleInput} value={input} onBlur={handleBlur} />
      </div>

      <div className="w-full border-solid border-2 border-black min-w-[100px]">
        <select className ="border-solid border border-black" name="options" value={select} onChange={handleSelect}>
          <option value="isprime">isPrime</option>
          <option value="isfibonacci">isFibonacci</option>
        </select>
      </div>

      <div className="w-[300px] border-solid border-2 border-black flex-none">
        <FiboPrime/>
      </div>


  </div>
  
  )
}
