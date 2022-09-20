import logo from '../assets/logo.svg';

function ReactMain() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginTop: '15px' }}>react-main</h2>
      <br />
      <img src={logo} alt="Logo React" width="200" />
      <br />
      <br />
      <p>Este é um microfrontend em <b>React (17.0.2).</b></p>
    </div>
  )
}

export default ReactMain