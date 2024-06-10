import React from "react";
import ReactDOM from "react-dom/client"; // Correct import
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </AuthProvider>
    </React.StrictMode>
  </Provider>
);
