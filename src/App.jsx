import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterConfig from './RouterConfig'
import { ToastContainer} from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='main-page'>
      <RouterConfig/>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default App
