import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
export interface IClearFixProps {
  className?: string | string[];
}

const ClearFix: React.FC<IClearFixProps> = ({
  className,
}) => {
  return (
    <div className={classNames(styles.clear_fix, className)} title="clearfix" />
  );
};

export default ClearFix;
