import React from 'react'
import { CounterProvider } from './context/counter/CounterContext'
import CounterApp from './components/CounterApp'

const App = () => {
  return (
    <div>
        <CounterProvider>
            <CounterApp />
        </CounterProvider>
    </div>
  )
}

export default App