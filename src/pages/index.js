import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import CloudDesigner from 'components/CloudDesigner';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Cloudinary Transform Designer</title>
      </Helmet>
      <Container type="full">
        <CloudDesigner />
      </Container>
    </Layout>
  );
};

export default IndexPage;