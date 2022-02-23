import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  useAdaptivity,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import { store } from "./core/store";
import Board from "./pages/Board";


const App = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout>
        <Board />
      </SplitLayout>
    </AppRoot>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </Provider>,
  document.getElementById("root"),
);
