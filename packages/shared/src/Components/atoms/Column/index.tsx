import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
export interface IColumnProps {
  className?: string | string[];
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Column: React.FC<IColumnProps> = ({
  className,
  width,
  ...otherProps
}) => {
  return (
    <div
      className={classNames(styles.column, styles[`column_${width}_12`], className)}
      {...otherProps}
      data-testid="column"
    >
      {otherProps.children}
    </div>
  );
};

export default Column;
