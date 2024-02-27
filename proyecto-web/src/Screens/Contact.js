import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Contacta conmigo</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/7axPGEay"
      >
        <label for="Name">Nombre</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Correo</label>
        <input
          id="Email"
          name="Email"
          type="Email"
          className={styles.input}
        ></input>
        <label for="Message">Mensaje</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit" className={styles.submit}>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;