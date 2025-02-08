import React, { useState, useEffect } from "react";
import axios from "axios";
import "./QuizPage.css";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch all questions from backend
  const startQuiz = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/quiz");
      setQuestions(response.data);
      setQuizStarted(true);
      setMessage("");
      setScore(0);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      setMessage("Failed to load quiz questions. Please try again.");
    }
  };

  // Handle user answer
  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      setMessage("Correct!");
    } else {
      setMessage("Wrong!");
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setMessage("");
      } else {
        setQuizStarted(false);
        setMessage("");
      }
    }, 1000);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {!quizStarted ? (
        <button className="start-btn" onClick={startQuiz}>
          Start Quiz
        </button>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestionIndex]?.question}</h2>
          <div className="options">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
          <p>Score: {score}</p>
          {message && <p>{message}</p>}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
