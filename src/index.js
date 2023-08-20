import React from 'react';
import ReactDOM from 'react-dom/client'; // Импорт ReactDOM из client
import { App } from 'components/App/App'; // Импорт компонента App
import './index.css';
import { Provider } from 'react-redux'; // Импорт Provider из react-redux
import { persistor, store } from './redux/store'; // Импорт хранилища store и persistor
import { PersistGate } from 'redux-persist/integration/react'; // Импорт компонента PersistGate для работы с redux-persist
import { BrowserRouter } from 'react-router-dom'; // Импорт BrowserRouter для маршрутизации

// Используем метод createRoot для рендеринга в режиме Concurrent Mode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Обертка приложения в Provider для работы с Redux */}
    <Provider store={store}>
      {/* Обертка для поддержки сохранения состояния через redux-persist */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Обертка для маршрутизации */}
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          {/* Рендеринг компонента App */}
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
