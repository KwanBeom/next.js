'use client';

import { ReactNode } from 'react';

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            border: 1px solid gray;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 30px;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Modal;
