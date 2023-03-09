import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { uiActions } from '../../state/slices/ui-slice';
import { theme } from '../../theme';
import { Status } from '../../types/enums';
import { NotificationSection } from './notification.styled';

export const NotificationBox = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState<string>('');
  const [onDispay, setOnDisplay] = useState<boolean>(true);
  const { notification } = useTypedSelector((state) => state.ui);

  const setStatusColor = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        setColor(theme.colors.lightGray);
        break;
      case Status.SUCCESS:
        setColor(theme.colors.green);
        break;
      case Status.ERROR:
        setColor(theme.colors.red);
        break;
    }
  };

  const hideNotification = () => {
    setTimeout(() => {
      setOnDisplay(false);
      dispatch(uiActions.showNotification(null));
    }, 3000);
  };

  useEffect(() => {
    if (notification?.status) {
      const notificationBox = document.getElementById('notification-box');
      notificationBox?.classList.remove('inactive');
      setOnDisplay(true);
      setStatusColor(notification?.status);
      hideNotification();
    }
  }, [notification]);

  return (
    <NotificationSection
      id='notification-box'
      onClick={hideNotification}
      className={`${!onDispay ? 'inactive' : ''}`}
      style={{
        backgroundColor: color,
      }}
    >
      <h4>{notification?.title}</h4>
      <p>{notification?.message}</p>
    </NotificationSection>
  );
};
