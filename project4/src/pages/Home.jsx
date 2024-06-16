function Home() {
    return (
        <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white text-blue-700 rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold mb-4">여행 플래너에 오신 것을 환영합니다!</h1>
                <p className="text-lg mb-6">
                    당신의 다음 여행 계획을 세우고, 이전 여행의 추억을 기록하세요. 여행 계획을 추가하고 수정하며, 여행
                    회고를 작성하여 소중한 순간을 기억해보세요.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="/travel-plans" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        여행 계획 보기
                    </a>
                    <a href="/add-travel-plan" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        새로운 계획 추가
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
