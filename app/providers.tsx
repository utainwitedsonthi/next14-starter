'use client'

import { AppStore, makeStore } from '@/lib/store'
import { NextUIProvider } from '@nextui-org/react'
import { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

export interface ProviderProps {
  children: ReactNode
}

export const Providers = ({ children }: ProviderProps) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <NextUIProvider>
      <Provider store={storeRef.current}>{children}</Provider>
    </NextUIProvider>
  )
}
