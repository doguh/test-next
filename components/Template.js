import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import MainContainer from './MainContainer';
import MainMenu from './MainMenu';

const Template = ({ children }) => (
  <>
    <Head>
      <link href="/static/style.css" rel="stylesheet" />
    </Head>
    <Header>Header du site</Header>
    <MainMenu>
      <Link href="/">
        <a>Accueil</a>
      </Link>
    </MainMenu>
    <MainContainer>{children}</MainContainer>
    <Footer>footer - doguh &copy; 2019</Footer>
  </>
);

export default Template;
