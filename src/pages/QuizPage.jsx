import React, { useState } from 'react';
import { Button, Text, Checkbox, Group } from '@mantine/core';

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
},
{
    id: 5,
    question: 'What is the most effective method of contraception?',
    options: ['Birth control pills', 'IUDs', 'Sterilization'],
    answer: 'Sterilization'
    },
    {
    id: 6,
    question: 'What is the difference between bacterial and viral sexually transmitted infections?',
    options: ['Bacterial STIs can be cured with antibiotics, while viral STIs cannot', 'Viral STIs can be cured with antibiotics, while bacterial STIs cannot', 'There is no difference between bacterial and viral STIs'],
    answer: 'Bacterial STIs can be cured with antibiotics, while viral STIs cannot'
    },
    {
    id: 7,
    question: 'What is the recommended age for individuals to start getting regular Pap tests to screen for cervical cancer?',
    options: ['18', '21', '25'],
    answer: '21'
    },
    {
    id: 8,
    question: 'What is the proper way to use a condom?',
    options: ['Put the condom on after penetration has already occurred', 'Reuse a condom if it hasn\'t been damaged', 'Pinch the tip of the condom before rolling it down the penis'],
    answer: 'Pinch the tip of the condom before rolling it down the penis'
    },
    {
    id: 9,
    question: 'What is a potential side effects of hormonal birth control?',
    options: ['Blinding', 'Nausea', 'Decreased sex drive'],
    answer: 'Nausea'
    },
    {
    id: 10,
    question: 'What is the best way to protect yourself from sexually transmitted infections?',
    options: ['Abstinence', 'Using condoms consistently and correctly', 'Getting vaccinated'],
    answer: 'Using condoms consistently and correctly'
    }
];


function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [answerDisabled, setAnswerDisabled] = useState(false);

    // click handler for selecting an answer
    function handleAnswerOptionClick(answerOption) {
        setSelectedAnswer(answerOption);
        checkAnswer(answerOption);
        setAnswerDisabled(true);
    }

    // check if answer is correct
    function checkAnswer(answerOption) {
        if (answerOption === quizQuestions[currentQuestionIndex].answer) {
            setIsAnswerCorrect(true);
            setScore(score + 1);
        } else {
            setIsAnswerCorrect(false);
        }
    }

    // next question
    function handleNextButtonClick() {
        setSelectedAnswer('');
        setIsAnswerCorrect(null);
        setAnswerDisabled(false);
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowScore(true);
        }
    }

    // restart quiz
    function handleRestartButtonClick() {
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setScore(0);
        setShowScore(false);
        setIsAnswerCorrect(null);
        setAnswerDisabled(false);
    }

    return (
            <div style={{ maxWidth: 600, margin: "auto", padding: 100 }}>

            {showScore ? (

                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >

                    <Text size="lg" align="center">Your Score: {score} out of {quizQuestions.length}</Text>
                    
                    <Button 
                        onClick={handleRestartButtonClick} 
                        variant="light"
                        style={{ marginTop: 50, padding: '10px 20px'  }}

                    >
                        Restart Quiz
                    </Button>

                </div>

            ) : (

                <div>
                <Text size="lg" align="center">Question {currentQuestionIndex + 1} of {quizQuestions.length}</Text>
                <Text size="xl" weight={700} style={{ marginTop: 20 }}>{quizQuestions[currentQuestionIndex].question}</Text>
        
                <Group style={{ marginTop: 20 }} direction='column' >
                    {quizQuestions[currentQuestionIndex].options.map(option => (
                        <div key={option} style={{ marginBottom: 10 }}>
                            <Checkbox
                                label={option}
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => handleAnswerOptionClick(option)}
                                disabled={answerDisabled}
                            />
                        </div>
                    ))}
                </Group>
        
                {isAnswerCorrect === true && 
                    <Text style={{ color: "green", marginTop: 10 }}>
                        Correct!
                    </Text>
                }

                {isAnswerCorrect === false && (
                    <>
                    <Text style={{ color: "red", marginTop: 15 }}>
                        Incorrect.
                    </Text>

                    <Text style={{ color: "green", marginTop: 30 }}>
                        The correct answer is: <b> {  quizQuestions[currentQuestionIndex].answer } </b>
                    </Text>
                    </>
                ) 
                }
        
                <Button 
                    onClick={handleNextButtonClick}
                    variant="outline"
                    disabled={!answerDisabled}
                    style={{ marginTop: 20 }}
                >
                    Next Question
                </Button>
                </div>

            )}

            </div>
      );
      
}
export default QuizPage;