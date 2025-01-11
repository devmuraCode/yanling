import Container from '@/components/Container'
import styles from './ContactSection.module.scss'
import Image from 'next/image'
import tel from '@/assets/phone.svg'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const ContactSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <h1 className={styles.title}>Biz bilan bog’laning</h1>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.phones}>
              <Image src={tel} alt="phone" width={30} height={30} />
              <div>
                <p>998 71 765 21 43</p>
                <p>998 90 233 12 44</p>
              </div>
            </div>
            <div className={styles.emails}>
              <div className={styles.email}>
                {" "}
                <span> Email:</span>
                <a href="mailto:info@uzross-techno.uz">info@uzross-techno.uz</a>
              </div>
              <div className={styles.email}>
                <span> Telegram:</span>
                <a href="https://t.me/uzross_info">@uzross-info</a>
              </div>
            </div>
          </div>

          <div className={styles.form}>
            <h3 className={styles.title_two}>Xabar jo’natish</h3>

            <div className={styles.forms}>
              <Input placeholder="Ism sharifingiz" />
              <Textarea />
              <button className={styles.btn}>Barchasini o’qish</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
