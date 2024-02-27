import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className = {styles.titleContainer}>
      <p>
        Proyecto con <br /><b>REACT</b>
      </p>
      <p>
        Por Sergio Becerra
      </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link 
        to = "Contact" 
        smooth
        duration={500} 
        className={styles.callToAction}>
        Redes Sociales
        </Link>
      </div>
    </div>
  )
}

export default Home