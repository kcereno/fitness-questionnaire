import { useState } from 'react';
import NextButton from '~/components/NextButton';
import Question from '~/components/Question';
import useKeyPress from '~/hooks/useKeyPress';
import { FormDataType } from '~/types/form';
import { QuestionType } from '~/types/questions';

type BasicInformationQuestionsProps = {
  questions: QuestionType[];
  sectionHeader: string;
  updateForm: (formData: FormDataType) => void;
  form: FormDataType;
};

function SectionQuestions({
  questions,
  sectionHeader,
  updateForm,
}: BasicInformationQuestionsProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswerValue, setCurrentAnswerValue] = useState<
    string | string[]
  >('');

  const currentQuestion = questions[currentQuestionIndex];
  const currentInputValid = !!currentAnswerValue;

  const handleNextButtonClick = () => {
    if (!currentAnswerValue) return;

    const formData = {
      [currentQuestion.id]: currentAnswerValue,
    };

    const totalQuestions = questions.length;
    const onLastQuestion = currentQuestionIndex + 1 === totalQuestions;

    updateForm(formData);

    if (!onLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswerValue('');
    }
  };

  const handleAnswer = (answer: string | string[]) => {
    setCurrentAnswerValue(answer);
  };

  useKeyPress('Enter', handleNextButtonClick);

  return (
    <div>
      <h1 className="uppercase text-sm font-bold">{sectionHeader}</h1>
      <Question
        currentQuestion={currentQuestion}
        handleAnswer={handleAnswer}
        value={currentAnswerValue}
      />

      <div className="mt-4">
        <NextButton
          onClick={handleNextButtonClick}
          disabled={!currentInputValid}
        />
      </div>
    </div>
  );
}

export default SectionQuestions;
