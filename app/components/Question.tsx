import TextQuestionInput from './questionInputs/TextQuestionInput';
import RadioQuestionInput from './questionInputs/RadioQuestionInput';
import { QuestionType } from '../types/questions';
import NumberQuestionInput from './questionInputs/NumberQuestionInput';
import CheckboxQuestionInput from './questionInputs/CheckboxQuestionInput';

type QuestionProps = {
  currentQuestion: QuestionType;
  handleAnswer: (data: string | string[]) => void;
  value: string | string[];
};

const Question = ({ currentQuestion, handleAnswer, value }: QuestionProps) => {
  const defaultProps = {
    id: currentQuestion.id,
    label: currentQuestion.label,
    handleAnswer,
  };

  switch (currentQuestion.type) {
    case 'text':
      return (
        <TextQuestionInput
          {...defaultProps}
          value={value as string}
          placeholder={currentQuestion.placeholder}
        />
      );
    case 'radio':
      return (
        <RadioQuestionInput
          {...defaultProps}
          value={value as string}
          options={currentQuestion.options}
        />
      );
    case 'number':
      return (
        <NumberQuestionInput
          {...defaultProps}
          value={value as string}
          placeholder={currentQuestion.placeholder}
        />
      );
    case 'checkbox':
      return (
        <CheckboxQuestionInput
          {...defaultProps}
          value={value as string[]}
          options={currentQuestion.options}
        />
      );
    default:
      return null; // Handle unknown question types gracefully
  }
};

export default Question;
