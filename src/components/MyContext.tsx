import { createContext } from 'react';

export const MyContext = createContext({appWindow:false, setAppWindow: { on: () => {}, off: () => {}, toggle: () => {} }});