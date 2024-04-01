import { SectionNameTypes } from './sections';

interface BaseQuestion {
  id: string;
  label: string;
}

interface TextQuestion extends BaseQuestion {
  type: 'text';
  placeholder: string;
}

interface NumberQuestion extends BaseQuestion {
  type: 'number';
  placeholder: string;
}

interface RadioQuestion extends BaseQuestion {
  type: 'radio';
  options: string[];
}

interface CheckboxQuestion extends BaseQuestion {
  type: 'checkbox';
  options: string[];
}
w;

export type QuestionType =
  | RadioQuestion
  | TextQuestion
  | NumberQuestion
  | CheckboxQuestion;

export interface Section {
  section: string;
  questions: QuestionType[];
}

export type QuestionDataType = {
  header: string;
  category: SectionNameTypes;
  questions: QuestionType[];
};
