import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddTravelPlan() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [details, setDetails] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // 여기서 실제로 데이터를 저장해야 합니다.
        console.log({ title, date, details })
        navigate('/travel-plans')
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">새로운 여행 계획 추가</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2">제목</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">날짜</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">세부 사항</label>
                    <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="border p-2 w-full"
                    />
                </div>
                <button type="submit" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700">
                    여행 계획 저장
                </button>
            </form>
        </div>
    )
}

export default AddTravelPlan
