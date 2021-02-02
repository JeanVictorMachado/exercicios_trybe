import { createContext } from 'react';

const Context = createContext({ 
  number: 10,
  name: 'Jean'
});

export default Context;