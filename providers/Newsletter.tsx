import Newsletter from "contexts/Newsletter";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function ({ children }: Props) {
  const [email, setEmail] = useState("");
  
  return (
    <Newsletter.Provider value={{ email, setEmail }}>{children}</Newsletter.Provider>
  )
}