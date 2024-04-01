import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/app';
import './index.css'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './services/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* изменить роутер */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
