import React from 'react';
import Layout from '@theme/Layout';
import Author from '@theme/BlogPostItem/Header/Author';

export default function List() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          laboratory
        </p>
      </div>
    </Layout>
  );
}
