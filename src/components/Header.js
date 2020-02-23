import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <p className="header-title">
          Cloudinary Transform Designer
        </p>
        <ul className="header-links">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;