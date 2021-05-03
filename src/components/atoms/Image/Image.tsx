import React, { useState } from 'react';
import './Image.scss';
import { IImage } from './Image.d';
import { } from '@material-ui/core'
import Skeleton from 'react-loading-skeleton';
const Image: React.FC<IImage> = ({ src, alt, ...props }) => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoad = () => {
        setIsLoading(false);
    }
    return <div className="customImage">
        {isLoading && <Skeleton className="skeleton" />}
        <img src={src} alt={alt} onLoad={handleLoad} {...props} />
    </div>;
}

export default Image;