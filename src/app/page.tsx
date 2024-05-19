'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="dashboard">대시보드 페이지로 이동</Link> <br />
      <Link href="link">라우팅 테스트 페이지로 이동</Link> <br />
      <Link href="link/historyapi">히스토리 api 사용하기</Link> <br />
      <Link href="errorHandling">에러 핸들링 페이지로 이동</Link> <br />
      <Link href="loading">로딩 UI 페이지로 이동</Link> <br />
      <Link href="redirect">리다이렉트 페이지로 이동</Link> <br />
      <Link href="routegroup">라우트 그룹 페이지로 이동</Link> <br />
      <Link href="dynamicroute">동적 라우팅 페이지로 이동</Link> <br />
      <Link href="dynamicroute2">
        동적 라우팅2(optional catch all) 페이지로 이동
      </Link>
      <br />
      <Link href="parallelroutes">병렬 라우팅 페이지로 이동</Link> <br />
    </>
  );
}
