import React from "react";
import { atom, RecoilRoot } from "recoil";
import Counter from "./components/Counter";
import { store } from "./store";
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
