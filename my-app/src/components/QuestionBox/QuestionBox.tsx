import './QuestionBox.css'

interface QuestionBoxProps {
    question: string;
}


export function QuestionBox(props: QuestionBoxProps) {
    const { question } = props;

    return (
        <div className="question-box">
            {question}
        </div>
    )
}