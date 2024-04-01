import type { MetaFunction } from '@remix-run/node';
import { useState } from 'react';
import Intro from '~/components/Intro';
import Nav from '~/components/Nav';
import { FormType } from '~/types/form';
import FormSummary from '~/components/FormSummary';
import Section from '~/components/Section';
import { SectionNameTypes } from '~/types/sections';
import { questionData } from '~/data/questions';

export const meta: MetaFunction = () => {
  return [
    { title: 'Fitness Questionnaire' },
    { name: 'Fitness Questionnaire', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(5);
  const [form, setForm] = useState<FormType>({});
  console.log('Index ~ form:', form);

  const sections: SectionNameTypes[] = [
    'intro',
    'basicInformation',
    'lifestyle',
    'medicalAndHealth',
    'goals',
    'summary',
  ];
  const currentSection = sections[currentSectionIndex];

  const updateMainForm = (formData: FormType) => {
    setForm({ ...form, ...formData });
    setCurrentSectionIndex(currentSectionIndex + 1);
  };

  const handleChangeSection = () => {
    setCurrentSectionIndex(currentSectionIndex + 1);
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
        return <FormSummary form={form} />;
      default:
        return null;
    }
  };

  const currentSectionComponent = renderCurrentSection();

  return (
    <div className="h-screen flex flex-col max-w-4xl mx-auto">
      <Nav />
      <main className="flex-grow flex items-center">
        <div className="mx-6 w-full">{currentSectionComponent}</div>
      </main>
    </div>
  );
}
