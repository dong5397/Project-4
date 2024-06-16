import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-xl font-bold">
                    <Link to="/" className="hover:text-gray-200">
                        여행 플래너
                    </Link>
                </div>
                <nav className="flex space-x-4">
                    <Link className="font-semibold hover:text-gray-200" to="/">
                        홈
                    </Link>
                    <Link className="font-semibold hover:text-gray-200" to="/travel-plans">
                        여행 계획
                    </Link>
                    <Link className="font-semibold hover:text-gray-200" to="/add-travel-plan">
                        계획 추가
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
