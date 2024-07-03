import React from 'react'
import style from './Slide.module.css'

const Slide = ({slides}) => {

    const [slide,setSlide] = React.useState(0)
    const [position,setPosition] = React.useState(0)
    const contentRef = React.useRef()


    React.useEffect(() => {
        const {width} = contentRef.current.getBoundingClientRect()
        setPosition(-(slide * width))
    },[slide])


    function voltar(){
        if(slide > 0) 
            setSlide(slide-1)

    }

    function avancar(){
        if(slide < slides.length -1) 
            setSlide(slide+1)
    }


  return (
    <section className={style.container}>
        <div ref={contentRef} className={style.content} style={{transform: `translateX(${position}px)`}}>
            {slides.map((slide) => (<div key={slide.id} className={style.item}>{slide.text}</div>))}
        </div>
        <nav className={style.nav}>
            <button onClick={voltar}>Anterior</button> <button onClick={avancar}>Proximo</button>
        </nav>
    </section>
  )
}

export default Slide
