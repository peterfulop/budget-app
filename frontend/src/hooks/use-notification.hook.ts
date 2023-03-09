import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../state/slices/ui-slice';
import { translate } from '../translate/translate';
import { TEXT } from '../translate/translate-objects';
import { useTypedSelector } from './use-typed-selector';

export const useNotification = () => {
  const { processName, status } = useTypedSelector(
    (state) => state.asyncProcess
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (processName && status) {
      dispatch(
        uiActions.showNotification({
          status: status,
          title: translate(TEXT.notifications[processName][status].title),
          message: translate(TEXT.notifications[processName][status].message),
        })
      );
    }
  }, [processName, status]);
};
