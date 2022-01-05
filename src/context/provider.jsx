import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [search,setSearch] = useState({
      ciudad: '',
    })

    const [data, setData] = useState({
      response: {},
      temperatura: 0,
      loading: false,
      error: null
    })

    return (            
      <AppContext.Provider value={{search, setSearch, data, setData}}>
          {children}
      </AppContext.Provider>  
    );
}

export const AppContext = createContext();