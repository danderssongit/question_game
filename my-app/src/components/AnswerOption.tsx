import { QuestionAnswer } from "../App";

interface AnswerOptionProps {
    option: QuestionAnswer;
}

export function AnswerOption(props: AnswerOptionProps) {
    const { option } = props;

    return (
        <div>
            {option.text}
        </div>
    )
}