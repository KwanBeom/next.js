import { permanentRedirect } from 'next/navigation';

const doPermanentRedirect = () => {
  const a = permanentRedirect('/');
  console.log(a);
};

export default doPermanentRedirect;
