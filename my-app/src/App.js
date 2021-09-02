import React from 'react'
import CakeContainer from './component/CakeContainer'
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import HooksCakeContainer from './component/HooksCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import NewCakeContainer from './component/NewCakeContainer';
import NewIceCreamContainer from './component/NewIceCreamContainer';
import ItemContainer from './component/ItemContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer/>
      {/* <ItemContainer cake/>
       <ItemContainer/>  */}
    {/* <HooksCakeContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      <NewIceCreamContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
