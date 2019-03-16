import Link from 'next/link';

const Index = () => (
  <div>
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
