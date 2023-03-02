import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './assets/index.css';
import routes from './config/routes';

const MainApp = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Container = styled.div({
  justifyContent: 'center',
  maxWidth: '1200px',
  padding: '20px',
  width: '100%',
});

function App() {
  return (
    <MainApp>
      <Container>
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
      </Container>
    </MainApp>
  );
}

export default App;
