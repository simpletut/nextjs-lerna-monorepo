import { FC } from 'react';
import { AppProps, NextWebVitalsMetric } from 'next/app';
import 'styles/global.scss';

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  // console.log('metric', metric);
}

const AppComponent: FC<AppProps> = ({
  Component,
  pageProps
}) => {
  return (
    <Component {...pageProps} />
  );
};

export default AppComponent;
