import React, { useState } from 'react'
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementBy, decrementBy, resetValue } from '@/store/counter'

export function Counter() {
  const [plusN, setPlusN] = useState(0)
  const [minusN, setMinusN] = useState(0)
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>plus</button>
      <button onClick={() => dispatch(incrementBy(plusN))}>plus n</button>
      <input
        value={plusN}
        onChange={(e: any) => {
          setPlusN(Number(e.currentTarget.value))
        }}
      />

      <button onClick={() => dispatch(decrement())}>minus</button>
      <button onClick={() => dispatch(decrementBy(minusN))}>minus n</button>
      <input
        value={minusN}
        onChange={(e: any) => {
          setMinusN(Number(e.currentTarget.value))
        }}
      />

      <button onClick={() => dispatch(resetValue())}>reset</button>
      <span>{count}</span>
    </div>
  )
}
