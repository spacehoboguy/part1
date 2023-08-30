import { useState } from "react"

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const zeroArray = new Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(null)
  const [votes, setVotes] = useState(zeroArray)
  const handleRandomAnec = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }
  console.log(votes)

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1;
    setVotes(newVotes)
    const highestVote = Math.max(...newVotes, mostVoted)
    const indexOfHighest = newVotes.indexOf(highestVote)
    // currently only finds the highest number in the array
    // but i need the index of that array
    console.log('highest vote',highestVote)
    console.log('index of highest',indexOfHighest)
    setMostVoted(indexOfHighest)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>
        {anecdotes[selected]}
      </p>
      <p><i>Has {votes[selected]} votes</i></p>
      <Button handleClick={handleRandomAnec} text='Random' />
      <Button handleClick={handleVote} text='Vote' />
      {mostVoted !== null &&
        <p>{anecdotes[mostVoted]}</p>
      }
    </>
  )
}

export default App
