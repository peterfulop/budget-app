import { Route, Routes } from 'react-router-dom';
import './assets/index.css';
import { MainApp } from './components/common-styled-components/pages.styled';
import routes from './config/routes';

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
