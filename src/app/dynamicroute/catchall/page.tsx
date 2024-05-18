'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [depths, setDepths] = useState<string[]>([]);
  const router = useRouter();

  return (
    <>
      <button type="button" onClick={() => setDepths(prev => [...prev, ''])}>
        depth 추가
      </button>
      {depths.map((_, idx) => (
        <input
          type="text"
          key={idx}
          placeholder={`depth${idx}`}
          onChange={e => {
            depths[idx] = e.target.value;
          }}
        />
      ))}
      <button
        type="button"
        onClick={() => router.push(`catchall/${depths.join('/')}`)}
      >
        이동
      </button>
    </>
  );
};

export default Page;
