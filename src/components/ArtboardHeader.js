import React from 'react';
import PropTypes from 'prop-types';

import { useClassName } from 'hooks';

import Button from 'components/Button';

const ArtboardHeader = ({ children, className, actions }) => {
  const { componentClassName, childClassName } = useClassName({
    component: 'artboard-header',
    additionalParent: className
  });

  const hasActions = Array.isArray(actions) && actions.length > 0;

  return (
    <div className={componentClassName}>
      <h2 className={childClassName('title')}>
        { children }
      </h2>
      { hasActions && (
        <ul className={childClassName('actions')}>
          { actions.map(({label, icon, onClick}, index) => {
            return (
              <li key={`${childClassName('actions')}-${index}`}>
                <Button onClick={onClick}>
                  { icon }
                  <span className="sr-only">{ label }</span>
                </Button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
};

ArtboardHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string,
  actions: PropTypes.array
}

export default ArtboardHeader;