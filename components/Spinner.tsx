type SpinnerProps = {
  color?: string;
};

const Spinner = ({ color = 'border-white' }: SpinnerProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className={`h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-t-transparent ${color}`}
      />
    </div>
  );
};

export default Spinner;
