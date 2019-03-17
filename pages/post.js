import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { fetchPost } from '../actions/posts';
import Template from '../components/Template';

class Post extends React.Component {
  static getInitialProps = async props => {
    const { store, query, isServer, res } = props.ctx;
    // a context is passed to fetchPost() so the saga can change res.status in case of error
    store.dispatch(fetchPost(query.id, { isServer, res }));
    return {};
  };

  render() {
    const id = parseInt(this.props.router.query.id);
    const { post, error, fetching } = this.props;
    return (
      <Template>
        <Head>
          <title>Article {id}</title>
          <meta
            name="description"
            content={`Une description de l'article ${id}`}
          />
        </Head>
        <section>
          {post ? (
            <>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
            </>
          ) : null}
          {error ? <p>Impossible de charger ce post</p> : null}
          {fetching ? <p>Chargement...</p> : null}
        </section>
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
      </Template>
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
