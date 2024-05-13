'use client';

import { getStaticProps } from 'next/dist/build/templates/pages';
import { useEffect } from 'react';

const FetchError = () => {
  useEffect(() => {
    throw '에러';
  }, []);

  return 'error';
};

export default FetchError;
