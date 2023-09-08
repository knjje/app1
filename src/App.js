import React from "react";
import { userContext } from './context';
import Header from "./context-header";
// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import MessageBox from './state-func'

// import Banner from './banner'
// import { Header,Content,Footer } from "./func-components";
// import Calendar from "./class-components";
// import { Calculator2 } from "./calculator";
// import { EventData2 } from "./event-data";

function App() {
  return (
    <userContext.Provider value={'Tom Jerry'}>
    <Header/>
    </userContext.Provider>
  )
}
export default App