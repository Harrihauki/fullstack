import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [reviews, setReview] = useState(0)
  const [positives, setPositive] = useState(0)
  const [goodBadRatio, setRatio] = useState(0)

  const handleGoodClick = () => {
    const newGoods = good + 1
    setGood(newGoods)
    console.log("pressed good button. goods now: ", newGoods)
    addReview()
    addPositive()
    alterGoodBadRatio(1)
  }

  const handleNeutralClick = () => {
    const newNeutrals = neutral + 1
    setNeutral(newNeutrals)
    console.log("pressed neutral button. neutrals now: ", newNeutrals)
    addReview()
  }

  const handleBadClick = () => {
    const newBads = bad + 1
    setBad(newBads)
    console.log("pressed bad button. bads now: ", newBads)
    addReview()
    alterGoodBadRatio(-1)
  }

  const addReview = () => {
    setReview(reviews + 1)
  }

  const addPositive = () => {
    setPositive(positives + 1)
  }

  const alterGoodBadRatio = (additive) => {
    console.log("alter ratio by ", additive)
    return (
      setRatio(goodBadRatio + additive)
    )
  }

  return (
    <div>
      <Header text={"give feedback"} />
      <div>
        <Button handler={handleGoodClick} text="good" />
        <Button handler={handleNeutralClick} text="neutral" />
        <Button handler={handleBadClick} text="bad" />
      </div>

      <Header text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} reviews={reviews}
      positives={positives} ratio={goodBadRatio} />
    </div>
  )
}

const Statistics = ({good, neutral, bad, reviews, positives, ratio}) => {

  //console.log("printing statistics")

  if (reviews === 0) {
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <table>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={reviews} />
        <StatisticLine text="average" value={ratio/reviews} />
        <StatisticLine text="positive" value={positives/reviews} />
      </table>
    )
  }
}

const StatisticLine = (props) => {
  //console.log({props})
  
  if (props.text === "positive") {
    return (
      <tbody>
        <tr>
          <td>{props.text}</td>
          <td>{100*props.value} %</td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Button = ({handler, text}) => {
  
  return (
    <button onClick={(handler)}>
      {text}
    </button>
  )
}

const Header = ({text}) => {
  //console.log("drew the header ", {text})

  return (
    <h1>{text}</h1>
  )
}

export default App