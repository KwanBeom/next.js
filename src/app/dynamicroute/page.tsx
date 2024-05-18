'use client';

import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Link href="dynamicroute/basic">가장 기본적인 동적 라우팅으로 이동</Link>
      <br />
      <Link href="dynamicroute/staticparams">
        정적 매개변수를 사용한 라우팅으로 이동
      </Link>
      <br />
      <Link href="dynamicroute/catchall">catch-all 라우팅으로 이동</Link>
      <br />
      <Link href="dynamicroute/optionalcatchall">
        optional catch-all 라우팅으로 이동
      </Link>
    </>
  );
};

export default Page;
