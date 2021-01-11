import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const prevPerson = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(people.length - 1)
    }
  }

  const nextPerson = () => {
    if (index < people.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const randomPerson = () => {
    let randomNumber = randomIntFromInterval(0, people.length - 1)

    while (randomNumber === index) {
      console.log(randomNumber)
      randomNumber = randomIntFromInterval(0, people.length - 1)
    }

    setIndex(randomNumber)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise me
      </button>
    </article>
  )
}

export default Review
