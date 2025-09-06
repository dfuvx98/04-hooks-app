import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp'
//import { TrafficLight } from './01-useState/TrafficLight'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
//import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { TasksApp } from './05-useReducer/TaskApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksApp/>
  </StrictMode>,
)
