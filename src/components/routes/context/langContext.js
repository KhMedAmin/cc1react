import React, {createContext, useState} from 'react' 
export  const Context = createContext();
let browserLang="FR";
export default function ContextProvider ({children})   {
    const [lang, setLang] = useState(browserLang)
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
    }

    if (theme) {
        document.body.classList.add('dark-body');
    } else {
        document.body.classList.remove('dark-body');
    }
    return (
        <Context.Provider value={{lang, setLang ,toggleTheme, theme}}>
            {children}
        </Context.Provider>
    )
}

