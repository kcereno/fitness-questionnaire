import useKeyPress from '~/hooks/useKeyPress';

import NextButton from './NextButton';

type IntroProps = {
  changeSection: () => void;
};

function Intro({ changeSection }: IntroProps) {
  useKeyPress('Enter', changeSection);
  return (
    <div className="fade-in">
      <div className="space-y-6 text-2xl">
        <p className="font-bold text-center">
          🌟 Welcome to Your Fitness Journey! 🌟
        </p>
        <p>
          I&apos;m thrilled to have you here. This questionnaire is for me to
          learn more about you, your health and fitness goals so I know I know
          how to support you best
        </p>
        <p>Ready to get started? Great!</p>
        <p>Lets start with some basic information.💪</p>
        <p className="text-sm text-gray-700">
          Just a quick heads-up: You have the opportunity to review and amend
          your answers at the end of each section if you happen to make a
          mistake.
        </p>
      </div>
      <div className="mt-10 ">
        <NextButton onClick={changeSection} />
      </div>
    </div>
  );
}

export default Intro;
