import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Container from 'components/Container';

const Header = () => {
  return (
    <header className="header">
      <Container type="full">
        <p className="header-title">
          Cloudinary Transform Designer
        </p>
        <ul className="header-links">
          <li>
            <a href="https://github.com/colbyfayock/cloudinary-transform-designer">
              <FaGithub /> <span className="sr-only">Github</span>
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;