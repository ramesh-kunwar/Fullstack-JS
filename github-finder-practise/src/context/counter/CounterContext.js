import { createContext, useReducer } from "react";
import counterReducer from "./CounterReducer";

const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
    const initialState = {
        count: 5,
        loading: true,
    }

    const [state, dispatch] = useReducer(counterReducer, initialState)

    function increaseCount (){
        dispatch({
            type: 'INCREASE_COUNT'
        })
    }

    function decreaseCount (){
        dispatch({
            type: 'DECREASE_COUNT'
        })
    }
    // console.log('counter context ', state.count);

    return <CounterContext.Provider value={{ count: state.count , decreaseCount, increaseCount}}>{children}</CounterContext.Provider>
}



export default CounterContext