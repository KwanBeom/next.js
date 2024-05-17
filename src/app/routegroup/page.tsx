import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Link href="routegroup/about">
        routegroup/(test)/about 페이지로 이동합니다.
      </Link>
      <br />
      <Link href="routegroup/detail">
        routegroup/(test)/detail 페이지로 이동합니다.
      </Link>
    </>
  );
};

export default Page;
