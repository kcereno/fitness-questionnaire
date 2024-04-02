import { useEffect, useState } from 'react';

import SectionQuestions from '~/components/SectionQuestions';

import { FormDataType, FormType } from '~/types/form';
import { QuestionDataType } from '~/types/questions';
import SectionRecap from './SectionRecap';

type SectionProps = {
  questionData: QuestionDataType;
  updateMainForm: (formData: FormType) => void;
};

function Section({
  questionData: { header, category, questions },
  updateMainForm,
}: SectionProps) {
  const [formComplete, setFormComplete] = useState(false);
  const [sectionForm, setSectionForm] = useState<FormDataType>({});

  useEffect(() => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(sectionForm).length;

    const allQuestionsAnswered = answeredQuestions === totalQuestions;

    setFormComplete(false);

    if (allQuestionsAnswered) {
      setFormComplete(true);
    }
  }, [sectionForm, questions.length]);

  const updateSectionForm = (formData: FormDataType) => {
    setSectionForm({ ...sectionForm, ...formData });
  };

  const handleConfirm = () => {
    const formData: FormType = {
      [category]: { ...sectionForm },
    };
    updateMainForm(formData);
    setFormComplete(false);
    setSectionForm({});
  };

  const handleAmend = () => {
    setSectionForm({});
  };

  const defaultProps = {
    form: sectionForm,
    questions,
  };

  return (
    <div className="fade-in">
      {!formComplete && (
        <SectionQuestions
          {...defaultProps}
          sectionHeader={header}
          updateForm={updateSectionForm}
        />
      )}
      {formComplete && (
        <SectionRecap
          {...defaultProps}
          confirmData={handleConfirm}
          amendData={handleAmend}
        />
      )}
    </div>
  );
}

export default Section;
