import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import styles from "../styles/Navigation.module.scss"

export type NavigationRoute = {
    name: string;
    path: string;
}

export type NavigationProps = {
    routes: NavigationRoute[];
}

const Navigation: React.FC<NavigationProps> = ({ routes }) => {
  const router = useRouter();

  return (
    <ul className={styles.navbar}>
      {routes.map(route => (
        <li key={route.name} className={router.pathname === route.path ? styles.activeRoute : ""}>
          <Link href={route.path}>
            <a>
              {route.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
