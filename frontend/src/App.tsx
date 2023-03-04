import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './assets/index.css';
import { MainApp } from './components/pages-styled-components/home.styled';
import routes from './config/routes';
import { API } from './types';

axios.defaults.baseURL = API.BASE_URL;

function App() {
  return (
    <MainApp>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </MainApp>
  );
}

export default App;
