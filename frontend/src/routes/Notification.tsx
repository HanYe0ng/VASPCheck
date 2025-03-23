import NotificationContent from "../components/notification/NotificationContent";

export default function Notification(){
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">공지사항</h1>
            <NotificationContent/>
        </div>

    );
}