import styles from "../styles/Container.module.scss"

type ContainerProps = {
  color?: string
}

const Container: React.FC<ContainerProps> = ({children, color}) => {
  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {children}
    </div>
  )
}

export default Container;
