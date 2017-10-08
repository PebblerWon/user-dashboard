import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';
import MainLayout from '../components/MainLayout/MainLayout';
function Users(prop) {
	console.log(prop);
  return (
    <MainLayout location={prop.location}>
    	<div className={styles.normal}>
    		<UsersComponent />
    	</div>
    </MainLayout>
  );
}


export default connect()(Users);
