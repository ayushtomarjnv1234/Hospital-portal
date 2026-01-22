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
  const [heartRate, setHeartRate] = useState(72)
  const [temperature, setTemperature] = useState(98.6)
  const [bloodPressure, setBloodPressure] = useState({ systolic: 120, diastolic: 80 })
  const [bpmInput, setBpmInput] = useState('')
  const [tempInput, setTempInput] = useState('')
  const [bpSystolicInput, setBpSystolicInput] = useState('')
  const [bpDiastolicInput, setBpDiastolicInput] = useState('')
  const [showHealthInputs, setShowHealthInputs] = useState(false)
  
  const stepGoal = 10000
  const calorieGoal = 2500

  // Health Status Checker
  const getHealthStatus = (type, value) => {
    switch (type) {
      case 'bpm':
        if (value >= 60 && value <= 100) return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' }
        if (value > 100) return { status: 'Elevated', color: 'text-orange-600', bg: 'bg-orange-50' }
        if (value < 60) return { status: 'Low', color: 'text-blue-600', bg: 'bg-blue-50' }
        break
      case 'temp':
        if (value >= 97.0 && value <= 99.0) return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' }
        if (value > 99.0) return { status: 'Fever', color: 'text-red-600', bg: 'bg-red-50' }
        if (value < 97.0) return { status: 'Low', color: 'text-blue-600', bg: 'bg-blue-50' }
        break
      case 'bp':
        if (value.systolic < 120 && value.diastolic < 80) return { status: 'Normal', color: 'text-green-600', bg: 'bg-green-50' }
        if (value.systolic >= 120 && value.systolic < 140 && value.diastolic >= 80 && value.diastolic < 90) return { status: 'Elevated', color: 'text-orange-600', bg: 'bg-orange-50' }
        if (value.systolic >= 140 || value.diastolic >= 90) return { status: 'High', color: 'text-red-600', bg: 'bg-red-50' }
        break
      default:
        return { status: 'Unknown', color: 'text-gray-600', bg: 'bg-gray-50' }
    }
  }

  const handleBpmUpdate = () => {
    const value = parseFloat(bpmInput)
    if (!isNaN(value) && value > 0) {
      setHeartRate(value)
      setBpmInput('')
      setShowHealthInputs(false)
    }
  }

  const handleTempUpdate = () => {
    const value = parseFloat(tempInput)
    if (!isNaN(value) && value > 0) {
      setTemperature(value)
      setTempInput('')
      setShowHealthInputs(false)
    }
  }

  const handleBPUpdate = () => {
    const systolic = parseFloat(bpSystolicInput)
    const diastolic = parseFloat(bpDiastolicInput)
    if (!isNaN(systolic) && !isNaN(diastolic) && systolic > 0 && diastolic > 0) {
      setBloodPressure({ systolic, diastolic })
      setBpSystolicInput('')
      setBpDiastolicInput('')
      setShowHealthInputs(false)
    }
  }

  const addActivity = (type) => {
    if (type === 'steps') setSteps(prev => Math.min(prev + 500, stepGoal))
    if (type === 'calories') setCalories(prev => Math.min(prev + 100, calorieGoal))
  }

  const reduceActivity = (type) => {
    if (type === 'steps') setSteps(prev => Math.max(prev - 500, 0))
    if (type === 'calories') setCalories(prev => Math.max(prev - 100, 0))
  }

  return (
    <DashboardLayout links={patientLinks} title="Patient Portal" onLogout={handleLogout}>
      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white mb-8">
        {error && <p className="text-sm text-red-200 bg-red-900/30 border border-red-400 rounded-lg p-3 mb-4">{error}</p>}
        <h1 className="text-4xl font-extrabold mb-2">
          {loading ? '👋 Loading your dashboard...' : `👋 Welcome back, ${displayName}!`}
        </h1>
        <p className="text-blue-100 text-lg">
          Keep track of your health metrics and upcoming appointments at a glance.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* BPM Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-500 cursor-pointer hover:shadow-lg transition" onClick={() => setShowHealthInputs(!showHealthInputs)}>
          <div className="text-3xl mb-2">❤️</div>
          <div className="text-2xl font-bold text-gray-900">{heartRate}</div>
          <div className="text-sm text-gray-600">BPM</div>
          <div className={`text-xs font-semibold mt-2 px-2 py-1 rounded ${getHealthStatus('bpm', heartRate).color}`}>
            {getHealthStatus('bpm', heartRate).status}
          </div>
        </div>

        {/* Temperature Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-yellow-500 cursor-pointer hover:shadow-lg transition" onClick={() => setShowHealthInputs(!showHealthInputs)}>
          <div className="text-3xl mb-2">🩹</div>
          <div className="text-2xl font-bold text-gray-900">{temperature}°F</div>
          <div className="text-sm text-gray-600">Temperature</div>
          <div className={`text-xs font-semibold mt-2 px-2 py-1 rounded ${getHealthStatus('temp', temperature).color}`}>
            {getHealthStatus('temp', temperature).status}
          </div>
        </div>

        {/* Blood Pressure Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-purple-500 cursor-pointer hover:shadow-lg transition" onClick={() => setShowHealthInputs(!showHealthInputs)}>
          <div className="text-3xl mb-2">📊</div>
          <div className="text-2xl font-bold text-gray-900">{bloodPressure.systolic}/{bloodPressure.diastolic}</div>
          <div className="text-sm text-gray-600">Blood Pressure</div>
          <div className={`text-xs font-semibold mt-2 px-2 py-1 rounded ${getHealthStatus('bp', bloodPressure).color}`}>
            {getHealthStatus('bp', bloodPressure).status}
          </div>
        </div>
      </section>

      {/* Health Inputs Section */}
      {showHealthInputs && (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 mb-8 border-2 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Update Your Health Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* BPM Input */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">❤️ Heart Rate (BPM)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={bpmInput}
                  onChange={(e) => setBpmInput(e.target.value)}
                  placeholder="e.g., 72"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
                <button
                  onClick={handleBpmUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Update
                </button>
              </div>
              <p className="text-xs text-gray-600">Normal: 60-100 BPM</p>
            </div>

            {/* Temperature Input */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">🩹 Temperature (°F)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={tempInput}
                  onChange={(e) => setTempInput(e.target.value)}
                  placeholder="e.g., 98.6"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  step="0.1"
                  min="0"
                />
                <button
                  onClick={handleTempUpdate}
                  className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition font-semibold"
                >
                  Update
                </button>
              </div>
              <p className="text-xs text-gray-600">Normal: 97-99°F</p>
            </div>

            {/* Blood Pressure Input */}
            <div className="space-y-3 col-span-1">
              <label className="block text-sm font-semibold text-gray-700">📊 Blood Pressure</label>
              <div className="space-y-2">
                <input
                  type="number"
                  value={bpSystolicInput}
                  onChange={(e) => setBpSystolicInput(e.target.value)}
                  placeholder="Systolic"
                  className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  min="0"
                />
                <input
                  type="number"
                  value={bpDiastolicInput}
                  onChange={(e) => setBpDiastolicInput(e.target.value)}
                  placeholder="Diastolic"
                  className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  min="0"
                />
                <button
                  onClick={handleBPUpdate}
                  className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold text-sm"
                >
                  Update
                </button>
              </div>
              <p className="text-xs text-gray-600">Normal: &lt;120/80</p>
            </div>
          </div>
          <button
            onClick={() => setShowHealthInputs(false)}
            className="mt-6 w-full py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition font-semibold"
          >
            Close
          </button>
        </section>
      )}

      {/* Health Trackers Section */}
      <section className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Step Tracker */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <div className="h-48 overflow-hidden relative bg-gradient-to-br from-blue-500 to-blue-600">
            <img 
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80" 
              alt="Walking shoes" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-white text-2xl font-bold">🚶 Steps</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-4xl font-bold text-blue-600">{steps.toLocaleString()}</span>
                <span className="text-gray-600 ml-2 font-medium">/ {stepGoal.toLocaleString()}</span>
              </div>
              <span className="text-sm font-bold text-white bg-blue-600 px-3 py-1 rounded-full">
                {Math.round((steps / stepGoal) * 100)}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min((steps / stepGoal) * 100, 100)}%` }}
              ></div>
            </div>

            <p className="text-sm text-gray-600">
              💪 You're doing great! Keep moving to reach your daily goal.
            </p>
            
            <div className="flex gap-3">
              <button 
                onClick={() => addActivity('steps')}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                + Add 500 Steps
              </button>
              <button 
                onClick={() => reduceActivity('steps')}
                className="flex-1 py-3 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all font-semibold"
              >
                - Remove 500 Steps
              </button>
            </div>
          </div>
        </div>

        {/* Calories Tracker */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
          <div className="h-48 overflow-hidden relative bg-gradient-to-br from-orange-500 to-red-600">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80" 
              alt="Workout" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <h2 className="text-white text-2xl font-bold">🔥 Calories</h2>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-4xl font-bold text-orange-600">{calories.toLocaleString()}</span>
                <span className="text-gray-600 ml-2 font-medium">/ {calorieGoal.toLocaleString()}</span>
              </div>
              <span className="text-sm font-bold text-white bg-orange-600 px-3 py-1 rounded-full">
                {Math.round((calories / calorieGoal) * 100)}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500" 
                style={{ width: `${Math.min((calories / calorieGoal) * 100, 100)}%` }}
              ></div>
            </div>

            <p className="text-sm text-gray-600">
              🏃 A 30-minute workout can help you reach your daily target.
            </p>

            <div className="flex gap-3">
              <button 
                onClick={() => addActivity('calories')}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                + Add 100 Kcal
              </button>
              <button 
                onClick={() => reduceActivity('calories')}
                className="flex-1 py-3 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all font-semibold"
              >
                - Remove 100 Kcal
              </button>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  )
}

export default PatientDashboard


