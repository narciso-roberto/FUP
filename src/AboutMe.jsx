import React from 'react'
import style from './AboutMe.module.css'
import picture from './Fotos/pictue.jpeg'
import github from "./Fotos/icons8-github.svg"
import linkedin from "./Fotos/icons8-linkedin.svg"
import zap from "./Fotos/icons8-whatsapp.svg"


const AboutMe = () => {
  return (
    <section className={style.aboutMe}>
        <div className={style.card}>
            <div className={style.foto}>
                <img src={picture}/>
                <div className={style.infos}>
                    <p>Narciso Roberto de Souza</p>
                    <p>Fortaleza - CE</p>
                    <p>Cursando SI na UFC de Quixada</p>
                </div>
                <div className={style.buttons}>
                    <img src={linkedin}/>
                    <img src={zap}/>
                    <img src={github}/>

                </div>
            </div>
            <div className={style.text}>
                <h1>Ola, eu sou o <span className={style.destaque}>Narciso.</span></h1>
                <span className={style.subtitle}>Front-end | JavaScript | React | CSS3 | HTML5</span><br/>
                <p>
                 Sou um estudante apaixonado por tecnologia, com ênfase no desenvolvimento front-end. 
                 Tenho experiência em criar interfaces com layouts modernos e responsivos, sempre priorizando a experiência do usuário e o desempenho. 
                </p>
                <p>
                Minha meta é construir aplicações web de alto impacto.
                Estou sempre buscando aperfeiçoar minhas habilidades, criando projetos inovadores que façam diferença na vida das pessoas.
                </p>
            </div>

        </div>
    </section>
  )
}

export default AboutMe
