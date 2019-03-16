import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Button from '../components/Button';

const Post = props => {
  const id = parseInt(props.router.query.id);
  return (
    <div>
      <Head>
        <title>Article {id}</title>
        <meta
          name="description"
          content={`Une description de l'article ${id}`}
        />
      </Head>
      <h1>Article {id}</h1>
      <pre>{props.dummy}</pre>
      <p>
        <Link as={`/post/${id + 1}`} href={`/post?id=${id + 1}`}>
          <a>Article suivant</a>
        </Link>
      </p>
      <p>
        <Link href="/">
          <Button>Accueil</Button>
        </Link>
      </p>
    </div>
  );
};

Post.getInitialProps = async props => {
  // console.log({ props });
  // if (props.req) {
  //   return new Promise(resolve => setTimeout(resolve, 5000, { dummy: 'haha' }));
  // } else {
  //   return {};
  // }
  return {};
};

export default withRouter(Post);
