import React from 'react';
import classNames from 'classnames';

export interface IContainerProps {
  className?: string | string[];
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
}

const Container: React.FC<IContainerProps> = ({
  className,
  height,
  width,
  margin,
  padding,
  ...otherProps
}) => {
  const style = {
    height: height ?? '',
    width: width ?? '',
    margin: margin ?? '',
    padding: padding ?? ''
  };

  return (
    <div className={classNames(className)} style={style} data-testid="container">
      {otherProps.children}
    </div>
  );
};

export default Container;
