import { useCallback, useState } from 'react';
import { AnswerGrid } from './components/AnswerGrid/AnswerGrid';
import { QuestionBox } from './components/QuestionBox/QuestionBox';

import './App.css';

export interface QuestionAnswer {
    text: string;
    correct: boolean;
}

export interface QuestionObj {
    title: string;         // Can be text or image
    answers: QuestionAnswer[];
}

const questions: QuestionObj[] = [
    {
        title: 'How much is the fish?',
        answers: [
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '4', correct: false},
        ]
    }
];

function App() {
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0);

    const AnswerAttempt = useCallback((answer: QuestionAnswer) => {
        if(answer.correct) {
            setCurrentQuestionIndex((curr) => curr + 1);
        }
    }, [])

    const FiftyFifty = () => {
        // removes two incorrect answers
    }

    const BonusTime = () => {
        // gives the player ten extra seconds for the current question.
    }

    return (
        <div className="App">
            <header className="App-header">
                <QuestionBox question={questions[currentQuestionIndex].title}/>
                <AnswerGrid answers={questions[currentQuestionIndex].answers}/>
            </header>
        </div>
    );
}

export default App;
