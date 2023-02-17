import styles from '../css/Home.module.css'

function Company() {
    return(
        <div className={styles.home_container}>
            <h1><span>Costs</span></h1>
            <p>
                Costs é uma empresa fake criada para o Curso de React de Matheus Battisti em seu canal o Hora de Codar, disponível no YouTube, e este site é um exercício para aprender ReactJS e suas aplicações. 
            </p>
        </div>
    )
}

export default Company