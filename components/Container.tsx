import styles from "../styles/Container.module.scss"

const Container: React.FC = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container;
