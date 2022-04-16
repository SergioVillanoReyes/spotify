import React from 'react';
import Head from 'next/head';
import Loader from './Loader';
import MsgError from './MsgError';

const Layout = ({children, loading, error}) => (
  <>
    <Head>
      <title>Spotify</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <link rel="icon" type="image" href="/img/favicon.ico" />
    </Head>
    <div className="root">
      <Loader show={loading} />
      {error && (
        <MsgError message={error} />
      )}
      {children}
    </div>
  </>
);

export default Layout;