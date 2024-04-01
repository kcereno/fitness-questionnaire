import { QuestionDataType } from '~/types/questions';

export const basicInformationQuestionsData: QuestionDataType = {
  header: '01. Basic Information',
  category: 'basicInformation',
  questions: [
    {
      id: 'firstName',
      label: "What's your first name?",
      type: 'text',
      placeholder: 'Enter First Name',
    },
    {
      id: 'lastName',
      label: 'Whats your last name?',
      type: 'text',
      placeholder: 'Enter Last Name',
    },
    {
      id: 'gender',
      label: 'What is your gender?',
      type: 'radio',
      options: ['male', 'female'],
    },
    {
      id: 'height',
      label: 'How tall are you in inches?',
      type: 'number',
      placeholder: 'Enter height',
    },
    {
      id: 'age',
      label: 'How old are you?',
      type: 'number',
      placeholder: 'Enter age',
    },
  ],
};

export const lifestyleQuestionData: QuestionDataType = {
  header: '02. Lifestyle',
  category: 'lifestyle',
  questions: [
    {
      id: 'occupation',
      label: 'What do you do for a living?',
      type: 'text',
      placeholder: 'Enter occupation',
    },
    {
      id: 'occupationActivityLevel',
      label: 'Whats the activity level at your job?',
      type: 'radio',
      options: [
        'None (seated only)',
        'Moderate (light activity such as walking)',
        'High (heavy labor, very active)',
      ],
    },
    {
      id: 'workSchedule',
      label:
        'Do you follow a regular working schedule, do you work days, afternoon or nights?',
      type: 'text',
      placeholder: 'Enter work schedule',
    },
    {
      id: 'travelFrequency',
      label: 'How often do you travel?',
      type: 'radio',
      options: ['Rarely', 'A few times a month', 'A few times a year'],
    },
    {
      id: 'activities',
      label:
        'What physical activities do you participate in outside of work and the gym?',
      type: 'text',
      placeholder: 'Enter activities',
    },
  ],
};

export const medicalAndHealthQuestionsData: QuestionDataType = {
  header: '03. Medical and Health',
  category: 'medicalAndHealth',
  questions: [
    {
      id: 'diagnoses',
      label: 'Any diagnosed health problems?',
      type: 'text',

      placeholder: 'Enter diagnosed health problems',
    },
    {
      id: 'medications',
      label: 'Are you taking any medications?',
      type: 'text',

      placeholder: 'Enter medication',
    },
    {
      id: 'injuries',
      label: 'Any injuries?',
      type: 'text',

      placeholder: 'Enter injuries and therapies',
    },
    {
      id: 'stressAndMotivationalProblems',
      label: 'Any stresses or motivational problems?',
      type: 'text',

      placeholder: 'Enter stresses or motivational problems',
    },
    {
      id: 'familyHistory',
      label: 'Any diseases run in your family?',
      type: 'text',
      placeholder: 'Enter family disease history',
    },
    {
      id: 'diabetes',
      label: 'Do you currently suffer from diabetes',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'asthma',
      label: 'Do you currently suffer from asthma',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'highBloodPressure',
      label: 'Do you currently suffer from high blood pressure?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'lowBloodPressure',
      label: 'Do you currently suffer from low blood pressure?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'cigarettes',
      label: 'Are you a current cigarette smoker?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'diet',
      label: 'Your current diet could be best characterized as:',
      type: 'radio',
      options: [
        'Low fat',
        'Low carb',
        'High protein',
        'Vegetarian/Vegan',
        'No special diet',
      ],
    },
  ],
};

export const goalsQuestionData: QuestionDataType = {
  header: '04. Goals',
  category: 'goals',
  questions: [
    {
      id: 'readiness',
      label: 'Please rate your readiness for change:',
      type: 'radio',
      options: ['Not at all', 'Slightly', 'Moderately', 'Highly', 'Extremely'],
    },
    {
      id: 'goals',
      label: 'What following goals does best fit in with your goals?',
      type: 'checkbox',
      options: [
        'Improve health',
        'Improve endurance',
        'Increase strength',
        'Gain muscle',
        'Lose fat',
      ],
    },
    {
      id: 'trainingWhy',
      label: 'What is your goal with your training? Why?',
      type: 'text',
      placeholder: 'Enter training goal',
    },
    {
      id: 'timeline',
      label: 'By when do you want to reach your goal?',
      type: 'radio',
      options: [
        '8 weeks',
        '16 weeks',
        '24 weeks',
        '32 weeks',
        '40 weeks',
        '1 year',
      ],
    },
    {
      id: 'trainingFrequency',
      label: 'How many times a week are you willing train to reach your goal?',
      type: 'number',
      placeholder: '3',
    },
    {
      id: 'currentlyExercising',
      label: 'Are you currently exercising regularly (at least 3x per week)?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'trainerExperience',
      label: 'Have you trained with a personal trainer before?',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      id: 'trainingTimePreference',
      label: 'At what times during the day would you prefer to train?',
      type: 'checkbox',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
    },
  ],
};

export const questionData: {
  [sectionName: string]: QuestionDataType;
} = {
  basicInformation: basicInformationQuestionsData,
  lifestyle: lifestyleQuestionData,
  medicalAndHealth: medicalAndHealthQuestionsData,
  goals: goalsQuestionData,
};
