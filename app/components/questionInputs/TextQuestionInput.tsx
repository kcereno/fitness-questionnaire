/* eslint-disable jsx-a11y/no-autofocus */
import { removeLeadingWhitespaceAndCapitalize } from '~/utils/text';

type Props = {
  id: string;
  label: string;
  placeholder: string;
  handleAnswer: (newValue: string) => void;
  value: string;
};

function TextQuestionInput({
  label,
  id,
  placeholder,
  handleAnswer,
  value,
}: Props) {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    const formattedText = removeLeadingWhitespaceAndCapitalize(text);
    handleAnswer(formattedText);
  };

  return (
    <div>
      <label
        className="flex flex-col gap-10 text-2xl mb-10"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        autoFocus
        className="border-b-2 text-2xl focus:outline-none focus:border-black w-full mb-4"
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value ? value : ''}
      />
    </div>
  );
}

export default TextQuestionInput;
