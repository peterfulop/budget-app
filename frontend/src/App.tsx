import { Route, Routes } from 'react-router-dom';
import './assets/index.css';
import { MainApp } from './components/common-styled-components/pages.styled';
import { Notification } from './components/notification/notification';
import routes from './config/routes';
import { useTypedSelector } from './hooks/use-typed-selector';

function App() {
  const { notification } = useTypedSelector((state) => state.ui);

  return (
    <>
      {notification && <Notification {...notification} />}
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
    </>
  );
}

export default App;
