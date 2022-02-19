import style from '../styles/Article.module.scss';
import Container from './Container';

type ArticleProps = {
  header: string;
  text: string;
};

const Article: React.FC<ArticleProps> = ({ header, text }) => (
  <Container>
    <h3 className={style.articleHeader}>
      { header }
    </h3>
    <p className={style.articleText}>
      { text }
    </p>
  </Container>
);

export default Article;
