import { QuestionAnswer } from "../../../App";

import './AnswerOption.css';

interface AnswerOptionProps {
    option: QuestionAnswer;
}

export function AnswerOption(props: AnswerOptionProps) {
    const { option } = props;

    return (
        <button className="option">
            {option.text}
        </button>
    )
}