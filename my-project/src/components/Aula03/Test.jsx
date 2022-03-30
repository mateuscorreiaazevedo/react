import styles from './Test.module.css'

function Test() {
    return (
        <div className={styles.testContainer}>
            <h2 className={styles.testContent}>Esse é um teste para Css Modules</h2>
            <> 
                <ul>
                    <li>
                        <a className={styles.testContent} href="#">Home</a>
                    </li>
                    <li>
                        <a className={styles.testContent} href="#">About Us</a>
                    </li>
                    <li>
                        <a className={styles.testContent} href="#">Contact Us</a>
                    </li>
                </ul>
            </>
        </div>        
    )
}

export default Test