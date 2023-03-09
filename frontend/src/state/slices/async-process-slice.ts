import { createSlice } from '@reduxjs/toolkit';
import { AsyncProcessName, Status } from '../../types';
import { ISetAsyncAction } from '../actions/async-process-actions';

interface IUiSliceInitialState {
  isLoading: boolean;
  status: Status | null;
  processName: AsyncProcessName | null;
}

const initialState: IUiSliceInitialState = {
  status: null,
  processName: null,
  isLoading: false,
};

const asyncProcessSlice = createSlice({
  name: 'async-process',
  initialState,
  reducers: {
    setAsyncprocess(state, action: ISetAsyncAction) {
      const { status, processName } = action.payload;
      state.isLoading = status === Status.LOADING ? true : false;
      state.status = status;
      state.processName = processName;
    },
  },
});

export const asyncProcessActions = asyncProcessSlice.actions;

export default asyncProcessSlice;
