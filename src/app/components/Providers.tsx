"use client";

import { Provider } from "react-redux";
import { DarkLightProvider } from "../contexts/DarkLightContext";
import { store } from "../redux/store";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <DarkLightProvider>{children}</DarkLightProvider>
    </Provider>
  );
}

export default Providers;
