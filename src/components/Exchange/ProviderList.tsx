interface Provider {
    id: number;
    serviceName: string;
}

interface ListProps {
    providers: Provider[];
    onClick: (id: number) => void;
}

const ProviderList = ({ providers, onClick }: ListProps) => {
    if (providers.length === 0) return <p>검색 결과가 없습니다.</p>;

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {providers.map(p => (
                <li
                    key={p.id}
                    style={{
                        padding: '1rem',
                        borderBottom: '1px solid #ccc',
                        cursor: 'pointer'
                    }}
                    onClick={() => onClick(p.id)}
                >
                    {p.serviceName}
                </li>
            ))}
        </ul>
    );
};

export default ProviderList;
