
interface QuestionBoxProps {
    question: string;
}


export function QuestionBox(props: QuestionBoxProps) {
    const { question } = props;

    return (
        <div>
            {question}
        </div>
    )
}