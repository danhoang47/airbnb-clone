import { createContext } from 'react';

import { SeachContextType } from '_types/props';


const SearchContext = createContext<SeachContextType>({} as SeachContextType);

export default SearchContext;