import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import Template from '../components/Template';
import { fetchPostsList } from '../actions/posts';

const Index = () => (
  <Template>
    <Head>
      <title>Page d'accueil</title>
    </Head>
    <h1>Hello Next.js</h1>
    <ConnectedPostsList />
  </Template>
);

Index.getInitialProps = async props => {
  const { store, isServer, res } = props.ctx;
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
              <li>
                <Link as={`${post.permalink}`} href={`/post?id=${post.id}`}>
                  <a>{post.title}</a>
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
