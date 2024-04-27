import React from "react";

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-8 gap-2">{children}</section>
  )
}