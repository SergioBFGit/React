import React from 'react'
import styles from '../Screens/Services.module.css'

const Services = () => {
  return (
    <div className={styles.services}>
      <p>REACT</p>
      <img className={styles.React} src={require('../assets/React.png')}/>
    </div>
  )
}

export default Services