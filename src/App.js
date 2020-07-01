import React from 'react'
import News from './components/News'

class App extends React.Component {

  render() {
    return (
      <div>
        <nav className="navbar bg-dark">
          <p style={{marginLeft: '45%', fontFamily:'Orbitron', color: 'white', fontSize: '60px'}}>News</p>
        </nav>
        <div className="container" >
          <News />
        </div>
      </div>
    )
  }
}

export default App
