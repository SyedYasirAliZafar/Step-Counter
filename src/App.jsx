import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  function addStep(){
    setStep(step + 1);
  }
  function decreaseStep(){
    setStep(step - 1);
  }
  function addCount(){
    setCount(step + count);
  }
  function decreaseCount(){
    setCount(count - step);
  }

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count); 
  
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
   <div className='main'>
      <Step
      title = "Step" 
      initial = {step}
      increase = {addStep}
      decrease = {decreaseStep}
      />
      <Step 
      title = 'Count'
      initial = {count}
      increase = {addCount}
      decrease = {decreaseCount}
      />
      <div>
        <h3> {count} day from today is: 
         {dayOfWeek[futureDate.getDay()]} {monthOfYear[futureDate.getMonth()]} {futureDate.getDate()}, {futureDate.getFullYear()}
        </h3>
      </div>
   </div>
  )
}

export default App

function Step({title, increase, decrease, initial})
{
  return(
    <div className='step-count'>
    <button onClick={decrease} className='red'>
      -
    </button>
    <h1>{title}: {initial}</h1>
    <button onClick={increase} className='green'>
      +
    </button>
  </div>
  )
}