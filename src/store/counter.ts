import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICounterState {
  value: number
}

const initialState: ICounterState = {
  value: 0,
}

export const counterStore = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    resetValue: (state) => {
      state.value = 0
    },
  },
})

export const { increment, decrement, incrementBy, decrementBy, resetValue } = counterStore.actions

export default counterStore.reducer
