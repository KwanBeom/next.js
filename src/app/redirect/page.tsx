'use client';

import Link from 'next/link';
import doRedirect from './actions/doRedirect';
import doPermanentRedirect from './actions/permanentRedirect';
import { useRouter } from 'next/navigation';

const RedirectPage = () => {
  const router = useRouter();

  return (
    <>
      <form action={doRedirect}>
        <button type="submit">기본 리다이렉트</button>
      </form>

      <form action={doRedirect}>
        <button type="submit" onClick={doPermanentRedirect}>
          permanent 리다이렉트
        </button>
      </form>

      <button
        type="button"
        onClick={() => {
          router.push('/');
        }}
      >
        useRouter 리다이렉트
      </button>
    </>
  );
};

export default RedirectPage;
