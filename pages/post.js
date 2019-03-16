import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { fetchPost } from '../actions/posts';

class Post extends React.Component {
  static getInitialProps = async props => {
    props.ctx.store.dispatch(fetchPost(props.ctx.query.id));
    return {};
  };

  render() {
    const id = parseInt(this.props.router.query.id);
    const { post, error } = this.props;
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
        ) : error ? (
          <p>Ce post n'existe pas !</p>
        ) : (
          <p>Chargement...</p>
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
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.posts.fetchingPost,
    post: state.posts.post,
    error: state.posts.fetchPostError,
  };
}

export default connect(mapStateToProps)(withRouter(Post));
