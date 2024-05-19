import Link from 'next/link';

const Page = () => {
  // soft navigation으로 settings를 탐색하면 에러가 발생하지 않는다.
  return (
    <>
      <Link href="/parallelroutes/settings">
        soft navigation으로 settings 탐색
      </Link>
    </>
  );
};

export default Page;
