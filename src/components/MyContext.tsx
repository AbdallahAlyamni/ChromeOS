import { useBoolean } from '@chakra-ui/react';
import { ReactNode, createContext } from 'react';

export const AppWindowContext = createContext({appWindow: false, setAppWindow:{on:()=>undefined as void, off:()=>undefined as void, toggle:()=>undefined as void} });

// export const StarMenuContext = createContext({starMenuVisibility: false, setStarMenuVisibility:{on:()=>undefined as void, off:()=>undefined as void, toggle:()=>undefined as void} });

export function AppWindowProvider({ children }: { children:ReactNode}) {

    const [appWindow, setAppWindow] = useBoolean(false);
    
    return(
        <AppWindowContext.Provider value={{appWindow, setAppWindow}}>
            {children}
        </AppWindowContext.Provider>
    );
    
}

// export function StarMenuProvider({ children }: { children:ReactNode}) {

//     const [starMenuVisibility, setStarMenuVisibility] = useBoolean(false);
    
//     return(
//         <StarMenuContext.Provider value={{starMenuVisibility, setStarMenuVisibility}}>
//             {children}
//         </StarMenuContext.Provider>
//     );
    
// }