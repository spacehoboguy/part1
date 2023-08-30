import { useState } from "react"

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticsLine = ({ value, text }) => {
  if (text === 'Positive') {
    return (
      <tr>
        <td>{text} </td>
        <td>{value}%</td>
      </tr>
    )
  }
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalResponses = good + neutral + bad;
  const average = (good - bad) / totalResponses;
  const positivePercent = Math.round((good / totalResponses) * 100);

  if ((good + neutral + bad) == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <table>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text='Average' value={average} />
      <StatisticsLine text='Positive' value={positivePercent} />
    </table>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={() => { setGood(good + 1) }} text='Good' />
      <Button handleClick={() => { setNeutral(neutral + 1) }} text='Neutral' />
      <Button handleClick={() => { setBad(bad + 1) }} text='Bad' />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
