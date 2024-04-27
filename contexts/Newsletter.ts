import { createContext } from 'react';

export default createContext<{
  email: string;
  setEmail: (email: string) => void;
}>({
  email: '',
  setEmail: () => {}
})