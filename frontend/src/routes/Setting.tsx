export default function Setting() {
    return (
        <div className="max-w-screen-md mx-auto px-4 py-6 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 border-b pb-2">환경설정</h1>

            <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">신고 내역</h2>
                <p className="text-sm text-gray-600">당신이 신고한 거래소 내역을 확인할 수 있습니다.</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    신고 내역 보기
                </button>
            </div>

            <div className="bg-white rounded-xl shadow p-4 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">알림 설정</h2>
                <p className="text-sm text-gray-600">중요 공지 및 업데이트 알림을 설정할 수 있습니다.</p>
                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    알림 설정 변경
                </button>
            </div>

        </div>
    );
}
