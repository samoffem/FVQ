
import './App.css'
import Form from './component/Form'
import Stepper from './component/stepper'

function App() {

  return (
    <div className='app-wrapper'>
      <div className='app-inner-wrap'>
        <h1 className='main-header'>Personal Information</h1>
        <Stepper />
        <Form />

        <div className='terms-notice'>
          <p className='text-desc'>By clicking continue above, you have agreed to the <a>terms and policy </a>
          of the service</p>
        </div>

      </div>
    </div>
  )
}

export default App
