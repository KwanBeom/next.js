'use client';

import { usePathname, useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // pushState 예제
  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sortOrder);
    window.history.pushState(null, '', `?${params.toString()}`);
  }

  // replaceState 예제
  function switchLocale(locale: string) {
    // e.g. '/en/about' or '/fr/contact'
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, '', newPath);
  }

  return (
    <>
      {/* pushState 예제 */}
      <p>push state</p>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
      <br />
      <br />
      {/* replaceState 예제 */}
      <p>replace state</p>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  );
};

export default Page;
