import styles from '../styles/contact.module.scss'

const Contact = function({contacts, img, name, email}) {
	return (
        <div className={contacts}>
            <article className={styles.contactCard}>
            <img
                src={ img }
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{ name }</h3>
            <div className={styles.infoGroup}>
                <img
                    src="/public/images/phone-icon.png"
                    alt="phone icon"
                />
                <p>{ phone }</p>
            </div>
            <div className={styles.infoGroup}>
                <img
                    src="/public/images/mail-icon.png"
                    alt="mail icon"
                />
                <p>{ email }</p>
            </div>
        </article>
        </div>
	)
}

export { Contact }