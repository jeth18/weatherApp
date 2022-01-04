import {createContext,useState} from 'react';

export default ({ children }) =>{
    const [search,setSearch] = useState({
      ciudad: '',
      weather: {
        data: {},
        loading: false,
        error: null
      }
    });
    return (            
      <AppContext.Provider value={[search,setSearch]}>
          {children}
      </AppContext.Provider>  
    );
}

export const AppContext = createContext();