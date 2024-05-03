import styles from './styles/Layout.module.css';
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
     
        <div  className={styles.container}>
          
            <h1 className={styles.h1}>Welcome to Randify</h1>
            <div className={styles.startGameButtion}>
            <Link className={styles.startGameButtion} href="../pages/game">Start Game</Link>
            </div>

           
            <img className={styles.img} src="https://i.pinimg.com/originals/32/e1/88/32e1886987e6315e2b8e875c6d2656ae.jpg"></img>
            <footer className={styles.footer} >
              <p>&copy; 2024 Math App</p>
            </footer>
        </div>
       
    );
};

export default HomePage;