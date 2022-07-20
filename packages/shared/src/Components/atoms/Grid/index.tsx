import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
export interface IGridProps {
  className?: string | string[];
  nestedGrid?: boolean;
  flexbox?: boolean;
  testId?: string;
}

const Grid: React.FC<IGridProps> = ({
  className,
  nestedGrid,
  flexbox,
  testId,
  ...otherProps
}) => {
  const configGridClasses = [];
  const dataTestId = testId || 'grid';
  if (nestedGrid) configGridClasses.push(styles.nestedGrid);
  if (flexbox) configGridClasses.push(styles.flexbox);

  return (
    <>
      <div className={classNames(styles.grid, className, configGridClasses)} {...otherProps} data-testid={dataTestId}>
        {otherProps.children}
      </div>
      <div className={styles.clear_fix} />
    </>
  );
};

export default Grid;
