import { useLocation } from 'react-router-dom';

const NoResult = () => {
    const location = useLocation();
    const searchTerm = location.state?.searchTerm;

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>{searchTerm} X</h1>
            <p>입력한 거래소: <strong>{searchTerm}</strong></p>
        </div>
    );
};

export default NoResult;
