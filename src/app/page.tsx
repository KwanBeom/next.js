'use client';
import Link from 'next/link';

export default function Home() {
  const routing = () => {
    window.history.pushState(null, '', '/dashboard');
  };

  return (
    <>
      <Link href="/dashboard">대시보드 페이지로 이동</Link>
      <br />
      <Link href="link">라우팅 테스트 페이지로 이동</Link>
      <br />
      <Link href="link/historyapi">히스토리 api 사용하기</Link>
    </>
  );
}
