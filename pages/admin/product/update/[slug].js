import React from 'react';
import { useRouter } from "next/router";

import Header from '../../../../components/Admin/Header/Header';
import Layout from '../../../../components/Admin/Layout/Layout'
import ProductItem from '../../../../components/Admin/ProductDetail/ProductDetail';
const ProductDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <Layout>
            <Header direction={'Home > Products > Edit Product'}></Header>
            <ProductItem id={slug}></ProductItem>
        </Layout>
    );
};

export default ProductDetail;