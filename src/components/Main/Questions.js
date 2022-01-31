import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import Container from "../Layout/Container";
import Button from "../UI/Button";
import styles from "./Questions.module.css";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const DUMMY_QUESTIONS = [
    {
      id: 1,
      small: "What Our Customers Say",
      title: "Over 35 years experience designing handmade kitchens",
      text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
      author: "Jane, Dundee",
    },
    {
      id: 2,
      small: "What Our Customers Say 2",
      title: "Over 35 years experience designing handmade kitchens",
      text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
      author: "Jane, Dundee",
    },
    {
      id: 3,
      small: "What Our Customers Say 3",
      title: "Over 35 years experience designing handmade kitchens",
      text: "Since my first contact I have received a very high level of customer service and advice with my kitchen plans. Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.",
      author: "Jane, Dundee",
    },
  ];
  const setQuestionHandler = (nextPrev = 1) => {
    setCurrentQuestion((question) => {
      let newQuestion = 0;
      if (nextPrev === 1) {
        newQuestion = DUMMY_QUESTIONS[question + 1] ? question + 1 : 0;
      } else {
        console.log(DUMMY_QUESTIONS[question - 1]);
        newQuestion = DUMMY_QUESTIONS[question - 1]
          ? question - 1
          : DUMMY_QUESTIONS.length - 1;
      }

      return newQuestion;
    });
  };

  return (
    <div className={styles.questionContainer}>
      <Container>
        <div className={styles.questions}>
          <div
            className={styles.leftArrow}
            onClick={() => setQuestionHandler(-1)}
          ></div>

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={currentQuestion}
              classNames="fade"
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <div
                className={styles.question}
                key={DUMMY_QUESTIONS[currentQuestion].id}
              >
                <div className={styles.small}>
                  {DUMMY_QUESTIONS[currentQuestion].small}
                </div>
                <h3>{DUMMY_QUESTIONS[currentQuestion].title}</h3>
                <p>{DUMMY_QUESTIONS[currentQuestion].text}</p>
                <p className={styles.name}>
                  {DUMMY_QUESTIONS[currentQuestion].author}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
          <div
            className={styles.rightArrow}
            onClick={() => setQuestionHandler(1)}
          ></div>
        </div>

        <a href="#">
          <Button>Frequently Asked Questions</Button>
        </a>
      </Container>
    </div>
  );
};

export default Questions;
