import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Title = ({text}) => <h1>{text}</h1>

const MostVotes = ({anecdotes, votes}) => {
  const maxVotes = Math.max(...votes)
  const index = votes.indexOf(maxVotes)
  const anecdote = anecdotes[index]
  if(maxVotes===0)
    return <div>No votes</div>
  else 
    return <><div>{anecdote}</div><div>has {votes[index]} votes</div></> 
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]   

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
 
  return (
    <>
    <Title text="Anecdote of the day" />
    <div>{anecdotes[selected]}</div>
    <div>has {votes[selected]} votes</div>
    <Button handleClick={() => handleVotes()} text="vote" />
    <Button handleClick={() => setSelected(Math.floor(Math.random() * (anecdotes.length)))} text="Next anecdote" />
    <Title text="Anecdote with most votes" />
    <MostVotes anecdotes={anecdotes} votes={votes} />
    </>
  )
}

export default App