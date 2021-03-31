import React from 'react';

import blood from '../../assets/blood.svg';
import book from '../../assets/book.svg';
import pill from '../../assets/pills.svg';
import github from '../../assets/github.svg'
import female from '../../assets/female.svg'

import './styles.css'

function Home() {
  return (
    <div className="main-content">
      <section>
        <h1>Hello, I'm Bruna!</h1>
        <img src={female} alt=""/>
        <h3>Web Developer</h3>     
           
      </section>

      <ul>
        <li>
          <h2>SIM! Compliance</h2>
          <img src={pill} alt=""/>
          <p>Project made for a pharmaceutical consultancy.</p>
        </li>

        <li>
          <h2>Blood Type</h2> 
          <img src={blood} alt=""/>
          <p>It is a vanilla JavaScript application, in which you can check blood compatibility by selecting donor and recipient blood types.</p>
        </li>        

        <li>
          <h2>Books Basket</h2>
          <img src={book} alt=""/>
          <p>It's a reading manager, where you can register new books and add them to your lists. MyBook Basket is an app that stores our favourite books, users can make reviews and rate the books. It's a RoR app and it was deployed on Heroku.</p>
        </li>
      
        <li>
          <h2>GitHub</h2>
          <img src={github} alt=""/>
        </li>
      </ul>
    </div>
  );
}

export default Home;
