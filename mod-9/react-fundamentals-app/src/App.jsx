import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  return (
    <div className="container">
      
    <div>
      {/* Navbar  */}
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      
    <div>
      <label htmlfor="search">Search:</label>
      <input type="text" name="search" id="search" placeholder="Search" />
      <button onClick={handleClick}>Search</button>
    </div>

      {/* Main Section  */}
      <main>
        <h1>React Fundamentals App</h1>

        {/* Section 1  */}
        <section>
          <h2>Latest Products</h2>

          <p>Checkout our new products</p>
        </section>

        {/* Section 2  */}
        <section>
          <h2>Register for a discount</h2>
          <a href="#">Click here</a>"
        </section>
      </main>

      {/* Footer  */}
      <footer>
        <h3>Find us on Facebook</h3>
      </footer>
    </div>
  );
}

export default App;