import React from 'react';
import './Spinner.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner: React.FC = () => {
    return <div className="spinner">
        <CircularProgress />
    </div>;
}

export default Spinner;