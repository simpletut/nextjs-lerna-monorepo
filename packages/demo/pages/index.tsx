import React from 'react';
import { NextPage } from 'next';
import MasterTemplate from './../Components/templates/MasterTemplate';
import CommonProvider, {
  ICommonProvider,
} from './../providers/Common/common.provider';
import { Column, Grid } from 'shared';
import styles from './styles.module.scss';

const HomePage: NextPage = ({
  ...otherProps
}) => {
  const configCommonProvider: ICommonProvider = {
    example: 'test',
    ...otherProps
  };

  return (
    <CommonProvider {...configCommonProvider}>
      <MasterTemplate>
        <Grid>
          <Column width={12}>
            <div className={styles.content} data-testid="homeContent">
              <h1>
                Next JS - MonoRepo
              </h1>

              <span>
                Build and maintain your websites using Next JS and Shared Components
              </span>
            </div>
          </Column>
        </Grid>
      </MasterTemplate>
    </CommonProvider>
  );
};

export default HomePage;
