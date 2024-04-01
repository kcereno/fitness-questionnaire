import { FormType } from '~/types/form';
import Button from './ui/Button';
import { questionData } from '~/data/questions';

type FormSummaryProps = {
  form: FormType;
};

function FormSummary({ form }: FormSummaryProps) {
  const DUMMY_FORM: FormType = {
    basicInformation: {
      firstName: 'Karl',
      lastName: 'Cereno',
      gender: 'male',
      height: '3432',
      age: '423',
    },
    lifestyle: {
      occupation: '3432',
      occupationActivityLevel: 'Moderate (light activity such as walking)',
      workSchedule: 'Nights',
      travelFrequency: 'A few times a month',
      activities: 'Run',
    },
    medicalAndHealth: {
      diagnoses: 'No',
      medications: 'No',
      injuries: 'No',
      stressAndMotivationalProblems: 'No',
      familyHistory: 'No',
      diabetes: 'Yes',
      asthma: 'Yes',
      highBloodPressure: 'Yes',
      lowBloodPressure: 'Yes',
      cigarettes: 'Yes',
      diet: 'Vegetarian/Vegan',
    },
    goals: {
      readiness: 'Extremely',
      goals: ['Improve endurance', 'Increase strength', 'Gain muscle'],
      trainingWhy: 'Lose weight',
      timeline: '40 weeks',
      trainingFrequency: '3',
      currentlyExercising: 'Yes',
      trainerExperience: 'Yes',
      trainingTimePreference: ['Evening', 'Afternoon'],
    },
  };

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-2xl mb-4">
          All done! Lets just do a quick recap to make sure all your information
          is correct
        </h1>
        <ul className="list-disc mt-10  space-y-14">
          {Object.keys(DUMMY_FORM).map((section: string) => {
            const sectionHeader: string = questionData[section]['header'];
            const sectionQuestions = questionData[section]['questions'];

            return (
              <div key={section}>
                <h1 className="text-xl uppercase">{sectionHeader}</h1>
                <div className="space-y-4 mt-2">
                  {sectionQuestions.map(({ label, id }) => {
                    const answer = DUMMY_FORM[section][id];
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
      <div className="flex mt-10 gap-6">
        <Button onClick={() => {}}>Looks Good</Button>
        <Button onClick={() => {}}>Change Something</Button>
      </div>
    </div>
  );
}

export default FormSummary;
