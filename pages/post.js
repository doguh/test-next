import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Button from '../components/Button';

const Post = props => {
  const id = parseInt(props.router.query.id);
  const { post } = props;
  return (
    <div>
      <Head>
        <title>Article {id}</title>
        <meta
          name="description"
          content={`Une description de l'article ${id}`}
        />
      </Head>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Ce post n'existe pas !</p>
      )}
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
  const res = await fetch(`http://localhost:3000/api/posts/${props.query.id}`);
  const post = res.ok ? await res.json() : null;
  return { post };
};

export default withRouter(Post);
