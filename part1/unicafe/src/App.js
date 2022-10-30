import { useState } from 'react'

const Button = ({handleClick, name}) => <button onClick={handleClick}>{name}</button>

const Statistics = ({variables}) => {
  const[good, neutral, bad] = variables
  if(good===0 && bad===0 && neutral===0)
    return <div>No feedback given</div>
  else {
    return (
    <>
    <table>
    <tr><StatisticsLine text="good" value={good} /></tr>
    <tr><StatisticsLine text="neutral" value={neutral} /></tr>
    <tr><StatisticsLine text="bad" value={bad} /></tr>
    <tr><StatisticsLine text="all" value={good+neutral+bad} /></tr>
    <tr><StatisticsLine text="average" value={(good-bad)/(good+neutral+bad)} /></tr>
    <tr><StatisticsLine text="positive" value={(good/(good+neutral+bad))*100} optional="%" /></tr>
    </table>
    
    </> 
    )
  }  
} 

const StatisticsLine = ({text, value, optional}) => <><></><td>{text}</td><td>{value} {optional}</td></>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  const handleBadClick = () => {
    setBad(bad+1)
  }

  return (
    <><div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleGoodClick()} name={"good"}/>
      <Button handleClick={() => handleNeutralClick()} name={"neutral"} />
      <Button handleClick={() => handleBadClick()} name={"bad"}/>
    </div>
    <div>
        <h1>statistics</h1> 
        <Statistics variables={[good,neutral,bad]} />
    </div>
    </>
  )
}

export default App
