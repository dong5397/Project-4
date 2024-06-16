import { Link } from 'react-router-dom'
import { useState } from 'react'

function TravelPlansList() {
    const [plans, setPlans] = useState([
        // 예시 데이터
        { id: 1, title: '파리 여행', date: '2024-07-01' },
        { id: 2, title: '일본 모험', date: '2024-08-15' },
    ])

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">여행 계획</h1>
            <ul>
                {plans.map((plan) => (
                    <li key={plan.id} className="mb-2">
                        <Link to={`/travel-plans/${plan.id}`} className="text-blue-500 hover:underline">
                            {plan.title} - {plan.date}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/add-travel-plan" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700">
                새로운 여행 계획 추가
            </Link>
        </div>
    )
}

export default TravelPlansList
