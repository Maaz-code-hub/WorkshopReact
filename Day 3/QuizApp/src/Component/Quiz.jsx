import React from 'react'
import './Quiz.css'
import QuestionsList from './QuestionsList'

function Quiz() {
  const questions=[
    {
        question:"What is npm?",
        options:["Node Package Manager","New Programming Method","Next Programming Module","None of the above"],
        answer:"Node Package Manager"
    },
    {
        question:"Output of \"2\"+2 in JavaScript?",
        options:["4","22","undefined","TypeError"],
        answer:"22"
    },
    {
        question:"Full form of HTML?",
        options:["Hypertext Markup Language","Hyperlink and Text Markup Language","Highly Technical Markup Language","None of the above"],
        answer:"Hypertext Markup Language"
    },
    {
        question:"cmd for creating create-react-app?",
        options:["npm create vite@latest app-name ","New Programming Method","Next Programming Module","None of the above"],
        answer:"npm create vite@latest app-name "
    },
    {
        question:"Who is the father of the C programming language?",
        options:["Steve Jobs","Dennis Ritchie","New Programming Method","Next Programming Module"],
        answer:"Dennis Ritchie"
    },
    {
        question:"What is programming?",
        options:["The process of creating computer programs","New Programming Method","Next Programming Module","None of the above"],
        answer:"The process of creating computer programs"
    },
  ]

  const [currentquestionIndex, setCurrentquestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [showResult, setShowResult] = React.useState(false);

  const currentQuestion = questions[currentquestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentquestionIndex < questions.length - 1) {
      setCurrentquestionIndex(currentquestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div>
        <h1>Quiz Complete!</h1>
        <p>Your score: {score}/{questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <QuestionsList
        question={currentQuestion.question}
        options={currentQuestion.options}
        onSelect={handleAnswerSelect}
        selectedAnswer={selectedAnswer}
      />
      <button onClick={handleNext} disabled={!selectedAnswer}>Next</button>
    </div>
  );
}

export default Quiz
