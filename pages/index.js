import Link from 'next/link';
import Head from 'next/head';
import Template from '../components/Template';

const Index = () => (
  <Template>
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
  </Template>
);

export default Index;
