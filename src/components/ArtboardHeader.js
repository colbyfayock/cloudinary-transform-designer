import React from 'react';

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
          { actions.map(({label, icon, onClick}) => {
            return (
              <li>
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

export default ArtboardHeader;