import React from "react";
import ReactDOM from "react-dom";
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

import { Provider } from "react-redux";

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
