function ContactForm({handleSubmit, btnText, contactData}) {
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Insira seu nome"
                name="name"
                placeholder="Nome"
                handleOnChange={handleChange} 
                value={contact.name ? contact.name : ''}
                />
                
            <Input 
                type="text"
                text="Seu E-mail"
                name="email"
                placeholder="E-mail"
                handleOnChange={handleChange}
                value={contact.email ? contact.email : ''}
                />
            <Input
                type="text"
                text="Coloque sua mensagem para nós"
                name="message"
                placeholder="Mensagem"
                handleOnChange={handleChange}
                value={contact.message ? contact.message : ''} />
            
            <SubmitButton text={btnText} /> 
        </form>
    )
}

export default ContactForm