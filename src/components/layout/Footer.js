import {FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'
import styles from '../css/Footer.module.css'

function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span>
                &copy; 2023
            </p>
        </footer>
    )
}

export default Footer