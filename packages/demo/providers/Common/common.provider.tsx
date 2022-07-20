import React, { createContext } from 'react';

export interface ICommonProvider {
  example?: string,
}

export const CommonContext = createContext<ICommonProvider>({});

const CommonProvider: React.FC<ICommonProvider> = ({
  ...otherProps
}) => {
  return (
    <CommonContext.Provider value={{
      ...otherProps
    }}>
      {otherProps.children}
    </CommonContext.Provider>
  );
};

export default CommonProvider;
