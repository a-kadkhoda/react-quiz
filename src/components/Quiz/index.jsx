import { useState } from "react";
import quiz from "../../assets/Data/questions.js";
import "./index.css";
const Quiz = () => {
  const [step, setStep] = useState(0);
  const [points, setPoints] = useState(0);
  /* const [value,setValue] = useState(0) */
  let content;
  const scoreBehavior = `quiz-score ${(points>140)?"score-green":"score-red"}`;


  const next = (point, correctOption, select) => {
    if (select === correctOption) {
      setPoints(points + point);
    } else {
      setPoints(points + 0);
    }

    /*     const res = points.reduce((prev,current)=>{
      return prev +current
    },0)
    setValue(res) */
    setStep(step + 1);
  };



  if (step < quiz.length) {
    content = (
      <>
        <p className="title">{quiz[step].question}</p>
        <ul className="quiz-list">
          {quiz[step].options.map((item, index) => {
            return (
              <li
                className="quiz-items"
                key={index}
                onClick={() =>
                  next(quiz[step].points, quiz[step].correctOption, index)
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    content = (
      <>
        <span className={scoreBehavior} > Your score is : {points}</span>
      </>
    );
  }

  return (
    <>
      <section className="container">
        <h1 className="quiz-logo">
          <img src="../../src/assets/img/react.png" alt="" />
          <span>Quiz React App</span>
        </h1>
        <section className="content">{content}</section>
      </section>
    </>
  );
};

export default Quiz;
