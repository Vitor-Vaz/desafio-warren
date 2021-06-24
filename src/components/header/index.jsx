import React from 'react'
import Logo from '../logo'
import styles from './styles.module.css'


export default function Header(){


    return(
        <div className={styles.header}>
            <Logo />
        </div>
    )
}