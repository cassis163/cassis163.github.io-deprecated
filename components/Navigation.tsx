import Link from "next/link"
import styles from "../styles/Navigation.module.scss"

const Navigation: React.FC = () => {
    return (
        <ul className={styles.navbar}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Git</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Career</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation
