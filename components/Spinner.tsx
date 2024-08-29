type SpinnerProps = {
  color?: string;
};

const Spinner = ({ color = 'border-white' }: SpinnerProps) => {
  return (
    <div className='flex items-center justify-center'>
      <div
        className={`h-20 w-20 animate-spin rounded-full border-4 border-t-4 border-t-transparent sm:h-16 sm:w-16 ${color}`}
      />
    </div>
  );
};

export default Spinner;
