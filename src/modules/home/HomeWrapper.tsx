import React, { useEffect, useState } from 'react';
import PRODUCT_API from 'api/productApi'
import { IProducts } from 'models/IProducts';
import { Container, Grid } from '@material-ui/core';
import Card from 'components/organisms/Card';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
const HomeWrapper: React.FC = () => {
    const [data, setData] = useState<IProducts[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const response = await PRODUCT_API.getAllProducts();
                setData(response);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        })()
    }, []);
    const renderSkeletonTheme = (quantity: number) => {
        return new Array(quantity).fill(0).map((a, index) => <Grid key={`skeleton-${index}`} item md={4}>
            <SkeletonTheme>
                <div
                    key={index}
                    className="fakeCard"
                >
                    <div className="fakeCard-wrapper">
                        <div className="imgContainer">
                            <Skeleton height={280} className="skeletonImg" />
                        </div>
                        <Skeleton style={{ marginBottom: 20, marginTop: 20 }} height={30} />
                        <div className="text">
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </SkeletonTheme>
        </Grid>)
    }
    const renderProducts = (products: IProducts[]) => (
        products.map((product, index) => (
            <Grid key={`${product._id}-${index}`} item md={4}>
                <Card {...product} alt="product" />
            </Grid>
        ))
    )
    return <Container style={{ paddingTop: 50 }}>
        <Grid container spacing={5}>
            {isLoading ? renderSkeletonTheme(6) : renderProducts(data)}
        </Grid>
    </Container>;
}

export default HomeWrapper;