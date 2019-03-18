import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import { fetchPostsList } from '../actions/posts';

const Index = () => (
  <>
    <Head>
      <title>Page d'accueil</title>
    </Head>
    <h1>Hello Next.js</h1>
    <ConnectedPostsList />
  </>
);

Index.getInitialProps = async props => {
  const { store, isServer, res } = props;
  // a context is passed to fetchPost() so the saga can change res.status in case of error
  store.dispatch(fetchPostsList(null, { isServer, res }));
  return {};
};

class PostsList extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <ul>
        {posts &&
          posts.map(post => {
            return (
              <li key={post.id}>
                <Link as={`${post.permalink}`} href={`/post?id=${post.id}`}>
                  <a>{post.title}</a>
                </Link>{' '}
                |{' '}
                <Link href={`/post?id=${post.id}`}>
                  <a>/post?id={post.id}</a>
                </Link>{' '}
                |{' '}
                <Link as={`/post/${post.id}`} href={`/post?id=${post.id}`}>
                  <a>/post/{post.id}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.list,
  };
}

const ConnectedPostsList = connect(mapStateToProps)(PostsList);

export default Index;
