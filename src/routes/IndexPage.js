import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import MainLayout from '../components/MainLayout/MainLayout'

function IndexPage({location}) {
  return (
    <MainLayout location={location}>
      <div className={styles.nomal}>
        <h1 className={styles.title}>dva</h1>
        <div className={styles.welcome}></div>
        <ul className={styles.list}>
          <li>a</li>
          <li>b</li>
        </ul>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
