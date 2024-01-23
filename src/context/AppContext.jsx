import { useState } from "react"
import { useContext } from "react"
import { createContext } from "react"

export const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider")
  }
  return context
}

const AppContextProvider = ({ children }) => {
  const [category, setCategory] = useState("Buttons")

  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
