"use client"; // Добавляем директиву для клиентского компонента

import Button from '../../Button'
import Container from '../../Container'
import Input from '../../Input'
import styles from './ContactComponent.module.scss'

export const ContactUsComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <h2>Contact Us</h2>
          <hr />
        </div>
        <div className={styles.formGroup}>
          <Input
            id="name"
            label="Name"
            disabled={false}
            required
            className={styles.input}
          />
          <Input
            id="phone"
            label="Phone"
            disabled={false}
            required
            className={styles.input}
          />
          <Input
            id="email"
            label="Email"
            disabled={false}
            required
            className={styles.input}
          />
          <Input
            id="country"
            label="Country"
            disabled={false}
            required
            className={styles.input}
          />
          <textarea
            id="message"
            placeholder="Your message"
            className={styles.textarea}
          ></textarea>
        </div>
        <button className={styles.btn}>Submit</button>
      </Container>
    </div>
  )
}
