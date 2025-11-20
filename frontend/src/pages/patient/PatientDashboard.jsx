import { useState, useEffect } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import useLogoutNavigation from '../../hooks/useLogoutNavigation'
import useProfile from '../../hooks/useProfile'

export const patientLinks = [
  { label: 'Dashboard', path: '/patient/dashboard' },
  { label: 'Book Appointment', path: '/patient/book-appointment' },
  { label: 'Profile', path: '/patient/profile' },
]

const PatientDashboard = () => {
  const handleLogout = useLogoutNavigation()
  const { profile, loading, error } = useProfile('patient')
  const displayName = profile?.name || 'there'

  // Health Tracking State
  const [steps, setSteps] = useState(6543)
  const [calories, setCalories] = useState(420)
  const stepGoal = 10000
  const calorieGoal = 2500

  const addActivity = (type) => {
    if (type === 'steps') setSteps(prev => Math.min(prev + 500, stepGoal))
    if (type === 'calories') setCalories(prev => Math.min(prev + 100, calorieGoal))
  }

  return (
    <DashboardLayout links={patientLinks} title="Patient Portal" onLogout={handleLogout}>
      <section className="bg-white rounded-lg shadow-md p-6 space-y-3">
        {error && <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg p-3">{error}</p>}
        <h1 className="text-3xl font-bold text-gray-900">
          {loading ? 'Loading your dashboard...' : `Welcome, ${displayName}!`}
        </h1>
        <p className="text-gray-600">
          Access your upcoming appointments, book new visits, and manage your health profile all in one place.
        </p>
      </section>

      {/* Health Trackers Section */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Step Tracker */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80" 
              alt="Walking shoes" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h2 className="text-white text-xl font-bold">Step Tracker</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-4xl font-bold text-blue-600">{steps.toLocaleString()}</span>
                <span className="text-gray-500 ml-2">/ {stepGoal.toLocaleString()} steps</span>
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                {Math.round((steps / stepGoal) * 100)}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min((steps / stepGoal) * 100, 100)}%` }}
              ></div>
            </div>

            <p className="text-sm text-gray-600">
              You're doing great! Keep moving to reach your daily goal.
            </p>
            
            <button 
              onClick={() => addActivity('steps')}
              className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm font-medium"
            >
              + Add 500 Steps (Simulate Walk)
            </button>
          </div>
        </div>

        {/* Calories Tracker */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80" 
              alt="Workout" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h2 className="text-white text-xl font-bold">Calories Burned</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-4xl font-bold text-orange-500">{calories.toLocaleString()}</span>
                <span className="text-gray-500 ml-2">/ {calorieGoal.toLocaleString()} kcal</span>
              </div>
              <span className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                {Math.round((calories / calorieGoal) * 100)}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-orange-500 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min((calories / calorieGoal) * 100, 100)}%` }}
              ></div>
            </div>

            <p className="text-sm text-gray-600">
              Burn those calories! A 30-minute workout can help you reach your target.
            </p>

            <button 
              onClick={() => addActivity('calories')}
              className="w-full py-2 px-4 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-50 transition-colors text-sm font-medium"
            >
              + Add 100 Kcal (Simulate Workout)
            </button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  )
}

export default PatientDashboard


