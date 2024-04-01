import Button from './ui/Button';

type Props = {
  onClick: () => void;
  disabled?: boolean;
};

function NextButton({ onClick, disabled = false }: Props) {
  return (
    <div className="flex gap-4">
      <Button
        className="text-xl w-24"
        onClick={onClick}
        disabled={disabled}
      >
        Next{' '}
      </Button>
      <div className="flex items-center">
        <p>
          {' '}
          press <strong>Enter ↵</strong>
        </p>
      </div>
    </div>
  );
}

export default NextButton;
