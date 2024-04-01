import React from 'react';

type CheckboxQuestionInputProps = {
  id: string;
  label: string;
  options: string[];
  handleAnswer: (newValue: string | string[]) => void;
  value: string[];
};

const CheckboxQuestionInput = ({
  id,
  label,
  options,
  value,
  handleAnswer,
}: CheckboxQuestionInputProps) => {
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const updatedValue = value.includes(input)
      ? value.filter((value) => value !== input)
      : [...value, input];

    handleAnswer(updatedValue);
  };

  return (
    <div className="mb-10">
      <label
        htmlFor={id}
        className="flex flex-col gap-10 text-2xl mb-10"
      >
        {label}
      </label>
      <div className="flex flex-col gap-10 ">
        {options.map((option) => (
          <div
            key={option}
            className="flex items-center"
          >
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600 "
              id={option}
              value={option}
              onChange={handleSelect}
              checked={value.includes(option)}
            />
            <label
              className="ms-2 text- font-medium text-xl text-gray-900 border-b-2 hover:border-black checked:bg-red-300"
              htmlFor={option}
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxQuestionInput;
