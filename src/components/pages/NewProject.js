import { useNavigate } from 'react-router-dom';
import styles from '../css/NewProject.module.css'
import Message from '../layout/Message';
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    
    const navigate = useNavigate();

    function createPost(project) {

        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate('/projects', {state: {message: "Projeto criado com sucesso!"}})
        })
        .catch((err) => console.log(err))
    }
    
    return(
        <div className={styles.newprojetc_container}>
            <h1>Novo Projeto</h1>
            <Message type="success" message="Teste" />
            <p>Crie o seu projeto para depois adicionar mais serviços.</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject