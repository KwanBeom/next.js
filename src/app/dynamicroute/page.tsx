'use client';

import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const handleClick = () => {
    router.push(`dynamicroute/${value}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="아무 값이나 입력해용"
        onChange={e => setValue(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        이동
      </button>
    </>
  );
};

export default Page;
