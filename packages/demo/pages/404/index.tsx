import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <h1>
        404 Not Found!
      </h1>
      <Link href="/">
        Home
      </Link>
    </>
  );
};

export default NotFound404;
