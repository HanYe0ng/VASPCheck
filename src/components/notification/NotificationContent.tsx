import {useNotices} from "./useNotice";

const NotificationContent = () => {
    const notices = useNotices();

    if (!notices) return <p>공지 없다.</p>;

    return (
        <div>
            {notices.map((n) => (
                <div key={n.id}>
                    <h2>{n.title}</h2>
                    <p><strong>요약:</strong> {n.summary}</p>
                    <p>{n.content}</p>
                    <p>작성일: {new Date(n.createdAt).toLocaleString()}</p>
                    {n.updatedAt && <p>수정일: {new Date(n.updatedAt).toLocaleString()}</p>}
                </div>
            ))}
        </div>
    )
}

export default NotificationContent;