'use client';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <>
      <p>useRouter 훅을 이용해 리디렉션 페이지로 이동하기</p>
      <button type="button" onClick={() => router.push('../link/redirect')}>
        go to redirect
      </button>
    </>
  );
};

export default Page;
