import styles from './Alert2.module.css'

export default function Alert2({type="success",children}) {
    return (
        <div className={`${styles.alert} ${styles[type]} `}>
            {children}
        </div>
    )
}
