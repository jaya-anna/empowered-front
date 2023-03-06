import React, { useState } from 'react';

const quizQuestions = [
{        
    id: 1,        
    question: 'What is the difference between sexual orientation and gender identity?',        
    options: ['Sexual orientation refers to a person\'s attraction to others, while gender identity refers to a person\'s sense of self.', 'Sexual orientation and gender identity are the same thing.', 'Sexual orientation refers to a person\'s gender identity.'],
    answer: 'Sexual orientation refers to a person\'s attraction to others, while gender identity refers to a person\'s sense of self.'
},
{
    id: 2,
    question: 'Which of the following is an example of a barrier method of contraception?',
    options: ['Birth control pills', 'IUDs', 'Condoms'],
    answer: 'Condoms'
},
{
    id: 3,
    question: 'What is the difference between HIV and AIDS?',
    options: ['HIV is a virus that can lead to AIDS if left untreated.', 'AIDS is a virus that can lead to HIV if left untreated.', 'HIV and AIDS are the same thing.'],
    answer: 'HIV is a virus that can lead to AIDS if left untreated.'
},
{
    id: 4,
    question: 'What is the purpose of emergency contraception (also known as the "morning-after pill")?',
    options: ['To prevent pregnancy after unprotected sex or contraceptive failure', 'To prevent the spread of STIs', 'To terminate an existing pregnancy'],
    answer: 'To prevent pregnancy after unprotected sex or contraceptive failure.'
}
];


function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    

    function handleAnswerOptionClick(answerOption) {
        setSelectedAnswer(answerOption);
    }

    function handleNextButtonClick() {
        if (selectedAnswer === quizQuestions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        setSelectedAnswer('');
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowScore(true);
        }
    }

    function handleRestartButtonClick() {
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setScore(0);
        setShowScore(false);
    }

    return (
        <div>

        {showScore ? (

            <div>
                <h1>Your Score: {score} out of {quizQuestions.length}</h1>
                <button onClick={handleRestartButtonClick}>Restart Quiz</button>
            </div>

        ) : (

            <div>
                <h2>Question {currentQuestionIndex + 1} of {quizQuestions.length}</h2>
                <h3>{quizQuestions[currentQuestionIndex].question}</h3>

                <ul>
                    {quizQuestions[currentQuestionIndex].options.map(option => (
                        <li key={option}>
                            <label>
                                <input 
                                    type="checkbox" 
                                    value={option} 
                                    checked={selectedAnswer === option} 
                                    onChange={() => handleAnswerOptionClick(option)} 
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>

                <button onClick={handleNextButtonClick}>Next Question</button>
            </div>
        )}

        </div>
    );
}
export default QuizPage;