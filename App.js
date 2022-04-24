import React from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";d
import {Login} from "./screens";

const App = () => {
    return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <Login/>
          </PersistGate>
      </Provider>
    );
};

export default App;
