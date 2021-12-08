import React, {useState, createContext} from "react"

export const AskForDemoContext = createContext()

const AskForDemoContextProvider = ({children}) => {


    const [showAskForDemo, setShowAskForDemo] = useState(false)

    var value = {
        showAskForDemo, 
        setShowAskForDemo
    }


    return(
        <AskForDemoContext.Provider value={value}>
            {children}
        </AskForDemoContext.Provider>
    )
}

export default AskForDemoContextProvider