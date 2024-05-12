import Link from 'next/link';
import { redirect } from 'next/navigation';

const Page = async () => {
  const customPromise = () =>
    new Promise((res, rej) => {
      res(true);
    });

  const bool = await customPromise();

  if (bool) redirect('/');

  return (
    <>
      it is redirect page!
      <Link href="../link/historyapi">go to history api</Link>
    </>
  );
};

export default Page;
