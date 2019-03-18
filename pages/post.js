import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import dispatchAndWait from '../lib/dispatchAndWait';
import Button from '../components/Button';
import { fetchPost } from '../actions/posts';

class Post extends React.Component {
  static getInitialProps = async props => {
    const { store, query, isServer, res } = props;
    // a context is passed to fetchPost() so the saga can change res.status in case of error
    const action = fetchPost(query.id, { isServer, res });

    if (!isServer) {
      await dispatchAndWait(store, action, state => !state.posts.fetchingPost);
    } else {
      store.dispatch(action);
    }

    return {};
  };

  render() {
    return (
      <>
        <ConnectedPost />
        <p>
          <Link href="/">
            <Button>Accueil</Button>
          </Link>
        </p>
      </>
    );
  }
}

class InnerPost extends React.Component {
  render() {
    const { post, error, fetching } = this.props;
    return (
      <section>
        {post ? (
          <>
            <Head>
              <title>{post.title}</title>
              <meta
                name="description"
                content={`Une description de l'article ${post.title}`}
              />
            </Head>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </>
        ) : null}
        {error ? <p>Impossible de charger ce post</p> : null}
        {fetching ? <p>Chargement...</p> : null}
      </section>
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

const ConnectedPost = connect(mapStateToProps)(InnerPost);

export default withRouter(Post);
