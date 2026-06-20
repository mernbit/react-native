import { createContext, useContext, useState } from 'react';

const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('Repairs');

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);

export default TabProvider;

// const styles = StyleSheet.create({});
