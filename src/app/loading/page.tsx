'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState<{ title: string }[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  console.log(data);

  return data.map((v, idx) => <p key={idx}>{v.title}</p>);
};

export default Page;
