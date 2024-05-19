import Link from 'next/link';

const Layout = ({
  children,
  auth,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Link href="/parallelroutes/modal/login">open modal</Link>
      <div>{auth}</div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
