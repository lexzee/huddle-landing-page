import './sass/App.scss'
import logo from './images/logo.svg'
import hero from './images/illustration-mockups.svg'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Huddle logo" />
          <h1>Huddle</h1>
        </header>
        <main className="content">
          <div className="imgage">
            <img src={hero} alt="Huddle hero" />
          </div>
          <div className="main">
            <h2>Build The Community Your Fans Will Love</h2>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <button>Register</button>
          </div>
        </main>
        <footer className='footer'>
          <img src="./src/images/bg-mobile.svg" alt="" style={{width: '30px', border: '1px solid red'}}/>
          <img src="./src/images/bg-mobile.svg" alt="" style={{width: '30px', border: '1px solid red'}}/>
          <img src="./src/images/bg-mobile.svg" alt="" style={{width: '30px', border: '1px solid red'}}/>
        </footer>
      </div>
      <footer>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  )
}

export default App
