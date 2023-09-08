import React from "react";
import { userContext } from './context';
//import Content from "./context-content";
import Header2 from "./context-header2";
import Content2 from "./context-content2";
// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import MessageBox from './state-func'

// import Banner from './banner'
// import { Header,Content,Footer } from "./func-components";
// import Calendar from "./class-components";
// import { Calculator2 } from "./calculator";
// import { EventData2 } from "./event-data";

export default function App() {
  let [user, setUser] = React.useState('')
  return (
    <userContext.Provider value={[user, setUser]}>
    <Header2/>
    <Content2/>
    </userContext.Provider>
  )
}
