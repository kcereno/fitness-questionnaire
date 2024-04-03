import { FormDataType } from '~/types/form';
import { QuestionType } from '~/types/questions';
import Button from './ui/Button';

type SectionRecapProps = {
  form: FormDataType;
  questions: QuestionType[];
  confirmData: () => void;
  amendData: () => void;
};

function SectionRecap({
  form,
  questions,
  confirmData,
  amendData,
}: SectionRecapProps) {
  return (
    <div>
      <div>
        <h1 className="mb-4 text-2xl">
          Just to recap, confirm if the following is correct
        </h1>
        <ul className="ml-4 space-y-2 list-disc">
          {Object.keys(form).map((key) => {
            const question = questions.find(
              (question) => question.id === key
            )?.label;

            const answer = form[key];
            const answerIsArray = Array.isArray(answer);
            const answerString = answerIsArray ? (
              <ul className="list-disc">
                {answer.map((answer) => (
                  <li
                    className="ml-6"
                    key={answer}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
            ) : (
              answer
            );

            return (
              <li key={key}>
                <div className="text-xl">
                  {question} <span className="font-bold">{answerString}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-10">
        <Button
          className="w-32"
          onClick={confirmData}
        >
          Continue
        </Button>
        <Button
          className="w-32"
          variant="danger"
          onClick={amendData}
        >
          Redo
        </Button>
      </div>
    </div>
  );
}

export default SectionRecap;
