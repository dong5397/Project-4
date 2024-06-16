import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TravelPlansList from './pages/TravelPlansList'
import TravelPlanDetail from './pages/TravelPlanDetail'
import AddTravelPlan from './pages/AddTravelPlan'

import Header from './components/Header'

import './index.css'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="flex-grow">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="travel-plans" element={<TravelPlansList />} />
                    <Route path="travel-plans/:id" element={<TravelPlanDetail />} />
                    <Route path="add-travel-plan" element={<AddTravelPlan />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
