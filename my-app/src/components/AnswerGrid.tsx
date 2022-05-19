import { AnswerOption } from "./AnswerOption";
import { QuestionAnswer } from "../App";

interface AnswerGridProps {
    answers: QuestionAnswer[]
}

export function AnswerGrid(props: AnswerGridProps) {
    const { answers } = props;

    return (
        <div>
            <AnswerOption option={answers[0]}/>
            <AnswerOption option={answers[1]}/>
            <AnswerOption option={answers[2]}/>
            <AnswerOption option={answers[3]}/>
        </div>
    )
}