import React from 'react';
import Header from '../../../components/Admin/Header/Header';
import Layout from '../../../components/Admin/Layout/Layout';
import Users from '../../../components/Admin/Users/Users';

const index = (props) => {
    return (
        <Layout>
            <div className='p-4'>
                <Header direction={'Home > Customers'}></Header>
                <Users></Users>
            </div>
        </Layout>
    );
};

export default index;