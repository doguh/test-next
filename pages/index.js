import Link from 'next/link';
import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>Page d'accueil</title>
    </Head>
    <h1>Hello Next.js</h1>
    <ul>
      <li>
        <Link as="/post/1" href="/post?id=1">
          <a>Article 1</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Index;
