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
        <h1 className="text-2xl mb-4">
          Just to recap, confirm if the following is correct
        </h1>
        <ul className="list-disc ml-4 space-y-2">
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
      <div className="flex mt-10 gap-6">
        <Button onClick={confirmData}>Looks Good</Button>
        <Button onClick={amendData}>Change Something</Button>
      </div>
    </div>
  );
}

export default SectionRecap;
