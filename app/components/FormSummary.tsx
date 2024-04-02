import { FormType } from '~/types/form';
import Button from './ui/Button';
import { questionData } from '~/data/questions';
import { useState } from 'react';

type FormSummaryProps = {
  form: FormType;
  resetForm: () => void;
};

function FormSummary({ form, resetForm }: FormSummaryProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <>
          <div>
            <h1 className="mb-4 text-2xl text-center">
              All done! Lets just do a quick recap to make sure all your
              information is correct
            </h1>
            <div className="h-full overflow-y-scroll border border-gray-400">
              <div className="bg-white h-[600px]">
                <ul className="p-10 list-disc space-y-14">
                  {Object.keys(form).map((section: string) => {
                    const sectionHeader: string =
                      questionData[section]['header'];
                    const sectionQuestions = questionData[section]['questions'];

                    return (
                      <div key={section}>
                        <h1 className="text-xl uppercase">{sectionHeader}</h1>
                        <div className="mt-2 space-y-4">
                          {sectionQuestions.map(({ label, id }) => {
                            const answer = form[section][id];
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
                              <div
                                className="ml-7"
                                key={id}
                              >
                                <p>{label}</p>
                                <div className="font-bold">{answerString}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-5">
            <Button
              className="w-30"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              className="w-30"
              variant="danger"
              onClick={resetForm}
            >
              Redo
            </Button>
          </div>
        </>
      ) : (
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Form submitted!</h1>
          <p className="text-xl">
            I&apos;ll review your answers and will be reaching out you shorty!
          </p>
        </div>
      )}
    </div>
  );
}

export default FormSummary;
