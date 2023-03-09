import { createSlice } from '@reduxjs/toolkit';
import { INotification } from '../../types';
import { INotificationAction } from '../actions/ui-actions';

interface IUiSliceInitialState {
  notification: INotification | null;
}

const initialState: IUiSliceInitialState = {
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNotification(state, action: INotificationAction) {
      if (action.payload)
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
