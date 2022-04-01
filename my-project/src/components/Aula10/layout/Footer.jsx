import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import styles from './Footer.module.css'
export function Footer() {

    return (
        <footer>
            <ul className={styles.SocialList}>
                <li><BsFacebook/></li>
                <li><BsInstagram /></li>
                <li><BsLinkedin /></li>
            </ul>
        </footer>
    )
}