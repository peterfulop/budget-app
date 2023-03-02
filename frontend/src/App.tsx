import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './assets/index.css';
import routes from './config/routes';

const MainApp = styled.div({
  maxWidth: '1206px',
  margin: '0 auto',
});

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
