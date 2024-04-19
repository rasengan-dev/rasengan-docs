import React from 'react';

type Props = {
  children: React.ReactNode
}

export default function Main({ children }: Props) {
  return (
    <main className="px-0 lg:px-[100px] xl:px-[200px] mt-8">{children}</main>
  )
}