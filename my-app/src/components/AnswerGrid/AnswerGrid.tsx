import { AnswerOption } from "./AnswerOption/AnswerOption";
import { QuestionAnswer } from "../../App";

import './AnswerGrid.css';

interface AnswerGridProps {
    answers: QuestionAnswer[]
}

export function AnswerGrid(props: AnswerGridProps) {
    const { answers } = props;

    return (
        <div className="answer-grid">
            <div>
                <AnswerOption option={answers[0]}/>
                <AnswerOption option={answers[1]}/>
            </div>
            <div>
                <AnswerOption option={answers[2]}/>
                <AnswerOption option={answers[3]}/>
            </div>
        </div>
    )
}