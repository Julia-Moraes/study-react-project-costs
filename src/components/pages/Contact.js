
import styles from '../css/Contact.module.css'

function Contact({handleSubmit, btnText, contactData}) {
    return(
        <div className={styles.contact_container}>
            <h1>Mande sua mensagem para o nosso time <span>Costs</span></h1>
        </div>
    )
}

export default Contact