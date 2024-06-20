'use client'

import { useDispatch } from 'react-redux'
import { decrement, increment } from '@/lib/features/counter/counterSlice'
import { useAppSelector } from '@/lib/hooks'
import { Button } from '@nextui-org/react'

export default function Home() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>{count}</div>
      <div className="flex space-x-2">
        <Button onClick={() => dispatch(decrement())}>decrement</Button>
        <Button onClick={() => dispatch(increment())}>increment</Button>
      </div>
    </div>
  )
}
