import React, { useState, useEffect } from 'react'




import styles from './Navbar.module.css'

const Navbar = ({ views, handleViewChange }) => {
  return (
    <nav className={styles.navbar}>

        <ul>
          {
            views.map((view, index) => (

              index !== 2 ?
              (<li
                onClick={event => handleViewChange(event) }
                key={view.id}
                id={view.id}
                style={{ width: '150px' }}
               >
                 {view.title}
               </li>)
              :
              (<li key={view.id} style={{display: 'none' }}></li>)
              
            ))
          }
        </ul>


    </nav>
  )
}

export default Navbar