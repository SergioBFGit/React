import React from 'react'
import Step from "../Components/Step"
import styles from "./HowWeWork.module.css"

const HowWeWork = () => {

const steps=[
  {
    id: 1,
    text: "Virtual DOM eficiente: React utiliza un Virtual DOM que optimiza las actualizaciones en la interfaz de usuario, lo que mejora el rendimiento al minimizar las manipulaciones directas del DOM."
  },
  {
    id: 2,
    text: "Componentización: React fomenta la modularidad mediante el uso de componentes reutilizables, lo que facilita el desarrollo, mantenimiento y escalabilidad de las aplicaciones."
  },
  {
    id: 3,
    text: "Unidireccionalidad de datos: React sigue el flujo unidireccional de datos, lo que facilita el seguimiento de los cambios y depura la aplicación, especialmente en aplicaciones grandes."
  },
  {
    id: 4,
    text: "Gran ecosistema y comunidad activa: React cuenta con una amplia gama de bibliotecas y herramientas complementarias (como React Router, Redux, y Material-UI) que facilitan el desarrollo de aplicaciones complejas, y una comunidad activa que ofrece soporte y recursos adicionales."
  }
]

  return (
    <div className={styles.howWeWork}>
      <h2 className={styles.title}> Principales razones por las que uso React </h2>
      {
        steps.map((x) => (
          <Step text={x.text} step={x.id} />
        ))
      }
    </div>
  )
}

export default HowWeWork