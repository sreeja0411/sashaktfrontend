import React, { useState, useEffect, useMemo } from 'react';

const QuizPage = () => {
  const quizData = useMemo(() => [
    {
      question: '1.What is the right that discusses the importance of education of children?',
      options: ['Right to food', 'Right to sleep', 'Right to education', 'None'],
      correctAnswerIndex: 2,
      image: "https://tse1.mm.bing.net/th?id=OIP.hpUTDSPv1EynuqvagNt-PAHaEI&pid=Api&P=0&h=180",
    },
    {
      question: '2.Which right fights against child labour?',
      options: ['Right against child labour', 'Right to sleep', 'Right to education', 'None'],
      correctAnswerIndex: 0,
      image: "https://tse1.mm.bing.net/th?id=OIP.hpUTDSPv1EynuqvagNt-PAHaEI&pid=Api&P=0&h=180",
    },
    {
      question: " 3.What does the 'right to participation' for children primarily emphasize?",
      options: ["Freedom to Skip School", "Involvement in Decisions Concerning Them", "Right to Buy Goods", "Permission to Drive Cars"],
      correctAnswerIndex: 1,
      image: "https://tse1.mm.bing.net/th?id=OIP.hpUTDSPv1EynuqvagNt-PAHaEI&pid=Api&P=0&h=180",
    },
    {
      question: "4.What is child labor?",
      options: ["Children doing household chores", "Children working for a living wage", "Employment of children in any work that deprives them of their childhood", "Children helping their parents in their businesses"],
      correctAnswerIndex: 2,
      image: "https://tse1.mm.bing.net/th?id=OIP.hpUTDSPv1EynuqvagNt-PAHaEI&pid=Api&P=0&h=180",
    },
    {
      question: '5.Which right describes about the importance of food for children?',
      options: ['Right against child labour', 'Right to food', 'Right to education', 'None'],
      correctAnswerIndex: 1,
      image: "https://tse1.mm.bing.net/th?id=OIP.hpUTDSPv1EynuqvagNt-PAHaEI&pid=Api&P=0&h=180",
    },
  ], []); // Empty dependency array means this will only run once

  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(null));
  const [correctAnswers, setCorrectAnswers] = useState(Array(quizData.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const resetState = () => {
      setSelectedOptions(Array(quizData.length).fill(null));
      setCorrectAnswers(Array(quizData.length).fill(null));
    };

    if ((currentQuestion < quizData.length - 1 && selectedOptions[currentQuestion] !== null) || currentQuestion === quizData.length - 1) {
      const timeoutId = setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        resetState();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [currentQuestion, selectedOptions, quizData]);

  const handleAnswerClick = (selectedAnswerIndex, correctAnswerIndex) => {
    if (selectedOptions[currentQuestion] === null) {
      setSelectedOptions((prevSelectedOptions) => {
        const updatedOptions = [...prevSelectedOptions];
        updatedOptions[currentQuestion] = selectedAnswerIndex;
        return updatedOptions;
      });

      setCorrectAnswers((prevCorrectAnswers) => {
        const updatedCorrectAnswers = [...prevCorrectAnswers];
        updatedCorrectAnswers[currentQuestion] = correctAnswerIndex;
        return updatedCorrectAnswers;
      });

      if (selectedAnswerIndex === correctAnswerIndex) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setSelectedOptions(Array(quizData.length).fill(null));
    setCorrectAnswers(Array(quizData.length).fill(null));
    setCurrentQuestion(0);
  };

  return (
    <div className="quiz-container custom-background">
      <h1>Quiz Page</h1>

      {quizData.map((question, index) => (
        <div key={index} className="question-container">
          <div className="question-content">
            <div className="options-container">
              <h2>{question.question}</h2>
              
              {question.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerClick(optionIndex, question.correctAnswerIndex)}
                  className={`quiz-option ${
                    selectedOptions[index] !== null &&
                    optionIndex === selectedOptions[index] &&
                    (optionIndex === correctAnswers[index] ? 'correct-answer' : 'wrong-answer')
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {question.image && <img src={question.image} alt={`Question ${index + 1}`} className="quiz-image" />}
          </div>
        </div>
      ))}

      <div className="quiz-results">
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}</p>
        <button onClick={resetQuiz} className="quiz-button">
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
