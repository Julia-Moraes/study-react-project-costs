import { useNavigate } from 'react-router-dom'
import ContactForm from '../contact/ContactForm'
import Message from '../layout/Message';
import styles from '../css/Contact.module.css'

function Contact() {

    const navigate = useNavigate()

    function createContact(contact) {

        contact.name = ""
        contact.email = ""
        contact.message = ""

        fetch("http://localhost:5000/contacts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate('/', {state: {message: "Projeto criado com sucesso!"}})
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.contact_container}>
            <Message type="success" message="Teste" />
            <h1>Mande sua mensagem para o nosso time <span>Costs</span></h1>
            <ContactForm handleSubmit={createContact} btnText="Enviar Mensagem" />
        </div>
    )
}

export default Contact