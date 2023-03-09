import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { uiActions } from '../../state/slices/ui-slice';
import { theme } from '../../theme';
import { INotification, Status } from '../../types';

const NotificationSection = styled.section({
  position: 'absolute',
  padding: '1rem',
  top: 0,
  display: 'flex',
  gap: '5px',
  right: 0,
  margin: '10px',
  borderRadius: '5px',
  color: 'white',
  fontFamily: theme.fonts.alegreyaSans,
  opacity: 1,
  height: 'auto',
  cursor: 'pointer',
  h4: {
    textTransform: 'uppercase',
  },
  '&.inactive': {
    opacity: 0,
    overflow: 'hidden',
    '-webkit-transition': '(opacity 2s ease-in)',
    transition: 'opacity 2s ease-in',
  },
});

export const Notification = (notification: INotification) => {
  const [color, setColor] = useState<string>('');
  const [onDispay, setOnDisplay] = useState<boolean>(true);
  const dispatch = useDispatch();

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
    }, 2000);
  };

  useEffect(() => {
    if (notification.message) {
      setOnDisplay(true);
      setStatusColor(notification.status);
    }
    if (notification.status === Status.SUCCESS) {
      hideNotification();
    }
  }, [notification.status]);

  return (
    <NotificationSection
      onClick={hideNotification}
      className={`${!onDispay ? 'inactive' : ''}`}
      style={{
        backgroundColor: color,
      }}
    >
      <h4>{notification.title}</h4>
      <p>{notification.message}</p>
    </NotificationSection>
  );
};
