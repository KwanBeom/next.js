'use client';

const ErrorHandlingPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  console.log(error, reset);
  return <button onClick={reset}>다시 시도하기</button>;
};

export default ErrorHandlingPage;
