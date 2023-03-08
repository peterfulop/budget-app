import styled from 'styled-components';
import { theme } from '../../theme';
import { INotification, Status } from '../../types';

const NotificationSection = styled.section({
  width: '100%',
  height: '3rem',
  backgroundColor: '#1a8ed1',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem 10%,',
  alignItems: 'center',
  color: 'white',
  'p, h2': {
    fontSize: '1rem',
    margin: 0,
  },
});

export const Notification = (notification: INotification) => {
  const setStatusColor = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return theme.colors.lightGray;
      case Status.SUCCESS:
        return theme.colors.green;
      case Status.ERROR:
        return theme.colors.red;
    }
  };

  return (
    <NotificationSection
      style={{ backgroundColor: `${setStatusColor(notification.status)}` }}
    >
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </NotificationSection>
  );
};
