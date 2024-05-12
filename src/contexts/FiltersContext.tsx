import { dataInitialValue, initialFiltersOptions } from "@/app/constant";
import { SetStateAction, createContext, useState } from "react";
import { Dispatch } from "redux";

interface FiltersContextType {
  filters: any
  setFilters: any
  data: any
  setData: any
}

export const FiltersContext = createContext<FiltersContextType>({
  filters: initialFiltersOptions,
  setFilters: () => {},
  data: dataInitialValue,
  setData: () => {}
})

export const FiltersContextProvider = ({children}: any) => {
  const [filters, setFilters] = useState(initialFiltersOptions)
  const [data, setData] = useState(dataInitialValue)
  return(
    <FiltersContext.Provider value={{filters, setFilters, data, setData}}>
      {children}
    </FiltersContext.Provider>
  )
}
