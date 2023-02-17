import { Link } from "react-router-dom"
import styles from '../css/LinkButton.module.css'

function LinkButton({to, text}) {
    return (
        <Link to={to} className={styles.btn}>
            {text}
        </Link>
    )
}

export default LinkButton