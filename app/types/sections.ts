import { SectionFormType } from './form';

export type SectionNameTypes =
  | 'intro'
  | 'basicInformation'
  | 'lifestyle'
  | 'medicalAndHealth'
  | 'goals'
  | 'summary';

export type SectionProps = {
  updateMainForm: (formData: SectionFormType) => void;
};
