import React from 'react';
import Homepage from './components/Homepage';
import Menupage from './components/Menupage';
import Aboutpage from './components/Aboutpage';
import Brewrypage from './components/Brewrypage';
import Contactpage from './components/Contactpage';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  return (
    <BrowserRouter>
      <div className='App bg-dark_gray'>
        <div className='bg-black sticky top-0 z-10 text-white'>
          <div className='nav container mx-auto flex flex-wrap p-5  flex-row '>
            <div className='title-font font-medium '>
              <a href='#' className='brand ml-3 text-xl mr-80'>Ideal Kitchen</a>
            </div>

            <ul className='flex content-end mr-0  '>
              <li className='mx-5'>
                <Link to='#homepage' smooth> Home</Link>
              </li>
              <li className='mx-5'>
                <Link to='#menupage' smooth> Menu</Link>
              </li>
              <li className='mx-5'>
                <Link to='#brewrypage' smooth> Brewry</Link>
              </li>
              <li className='mx-5'>
                <Link to='#aboutpage' smooth> About</Link>
              </li>
              <li className='mx-5'>
                <Link to='#contactpage' smooth> Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <Homepage />
        <Menupage />
        <Brewrypage />
        <Aboutpage />
        <Contactpage />

        <footer className="bg-black p-10 text-white text-center">
          All Rights Reserved Ideal Kitchen INC @ 2022
        </footer>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
