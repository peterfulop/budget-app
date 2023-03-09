import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { uiActions } from '../../state/slices/ui-slice';
import { theme } from '../../theme';
import { Status } from '../../types';
import { NotificationSection } from './notification.styled';

export const Notification = () => {
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
    setOnDisplay(false);
    setTimeout(() => {
      dispatch(uiActions.showNotification({}));
    }, 3000);
  };

  useEffect(() => {
    if (notification?.message) {
      setOnDisplay(true);
      setStatusColor(notification.status);
    }
    if (notification?.status === Status.SUCCESS) {
      hideNotification();
    }
  }, [notification?.status]);

  return (
    <NotificationSection
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
