import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Intro from '~/components/Intro';
import { FormType } from '~/types/form';
import FormSummary from '~/components/FormSummary';
import Section from '~/components/Section';
import { SectionNameTypes } from '~/types/sections';
import { questionData } from '~/data/questions';
import { decimalToPercent } from '~/utils/numbers';
import ProgressBar from '~/components/ProgressBar';

export const meta: MetaFunction = () => {
  return [
    { title: 'Fitness Questionnaire' },
    { name: 'Fitness Questionnaire', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [form, setForm] = useState<FormType>({});

  const sections: SectionNameTypes[] = [
    'intro',
    'basicInformation',
    'lifestyle',
    'medicalAndHealth',
    'goals',
    'summary',
  ];

  const progressPercentage = decimalToPercent(
    (currentSectionIndex + 1) / sections.length
  );

  const currentSection = sections[currentSectionIndex];

  const updateMainForm = (formData: FormType) => {
    setForm({ ...form, ...formData });
    setCurrentSectionIndex(currentSectionIndex + 1);
  };

  const handleChangeSection = () => {
    setCurrentSectionIndex(currentSectionIndex + 1);
  };

  const handleResetForm = () => {
    setCurrentSectionIndex(0);
    setForm({});
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'intro':
        return <Intro changeSection={handleChangeSection} />;
      case 'basicInformation':
      case 'lifestyle':
      case 'medicalAndHealth':
      case 'goals':
        return (
          <Section
            questionData={questionData[currentSection]}
            updateMainForm={updateMainForm}
          />
        );
      case 'summary':
        return (
          <FormSummary
            form={form}
            resetForm={handleResetForm}
          />
        );
      default:
        return null;
    }
  };

  const currentSectionComponent = renderCurrentSection();

  return (
    <>
      <ProgressBar percent={progressPercentage} />
      <main className="flex flex-col h-screen max-w-4xl mx-auto">
        <div className="flex items-center flex-grow">
          <div className="w-full mx-6">{currentSectionComponent}</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"></div>
      </main>
    </>
  );
}
