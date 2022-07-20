import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface IErrorProps {
  statusCode: number;
}

const Error: NextPage<IErrorProps> = ({ statusCode }) => {
  return (
    <>
      <Head>
        <title>Something went wrong</title>
      </Head>
      <h1>
        Something went wrong
      </h1>
      <p>
        {`An error ${statusCode} occurred`}
      </p>
      <Link href="/">
        Home
      </Link>
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
