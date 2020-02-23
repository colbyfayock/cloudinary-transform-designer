import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Artboard from 'components/Artboard';
import CloudImage from 'components/CloudImage';

const IndexPage = () => {

  const options = {
    w: 1280,
    h: 640,
    c: 'fill',
    q: 'auto',
    f: 'auto'
  };

  const text = [
    {
      text: 'What is the JAMstack and how do I get started?',
      format: {
        font: 'Source Sans Pro',
        size: 70,
        lineSpacing: -10,
        weight: 'semibold'
      },
      options: {
        w: 860,
        c: 'fit',
        co: 'rgb:232129',
        g: 'south_west',
        x: 80,
        y: 180,
      }
    }
  ];

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Container type="full">
        <Artboard>
          <CloudImage cloudName="fay" imageId="blog-social-card-1.0" options={options} text={text} />
        </Artboard>
      </Container>
    </Layout>
  );

};

export default IndexPage;