import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function TravelPlanDetail() {
    const { id } = useParams()
    const [plan, setPlan] = useState(null)

    useEffect(() => {
        // 여기서 실제 데이터를 가져와야 합니다.
        setPlan({ id, title: '파리 여행', date: '2024-07-01', details: '파리 여행의 상세 계획입니다.' })
    }, [id])

    if (!plan) return <div>로딩 중...</div>

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{plan.title}</h1>
            <p>날짜: {plan.date}</p>
            <p>세부 사항: {plan.details}</p>
        </div>
    )
}

export default TravelPlanDetail
