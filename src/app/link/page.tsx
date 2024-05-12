import Link from 'next/link';

const Page = () => {
  return (
    <>
      <p>넥스트의 Link 태그를 이용한 라우팅</p>
      <Link href="link/userouter">userouter 페이지로 이동하기</Link>
    </>
  );
};

export default Page;
