import { useEffect, useState } from 'react'
import axios from 'axios'
import DashboardLayout from '../../components/DashboardLayout'
import Button from '../../components/Button'
import useLogoutNavigation from '../../hooks/useLogoutNavigation'
import useProfile from '../../hooks/useProfile'

export const doctorLinks = [
  { label: 'Dashboard', path: '/doctor/dashboard' },
  { label: 'Patient List', path: '/doctor/patient-list' },
  { label: 'Profile', path: '/doctor/profile' },
]

const API_BASE_URL = import.meta.env.VITE_API_URL

const DoctorDashboard = () => {
  const handleLogout = useLogoutNavigation()
  const { profile, loading, error } = useProfile('doctor')
  const displayName = profile?.name || 'Doctor'

  const [pendingAppointments, setPendingAppointments] = useState([])
  const [loadingPending, setLoadingPending] = useState(true)
  const [pendingError, setPendingError] = useState('')
  const [processingId, setProcessingId] = useState(null)
  const [stats, setStats] = useState({ totalPatients: 0, patientsThisWeek: 0 })
  const [loadingStats, setLoadingStats] = useState(true)

  const authHeaders = () => {
    const token = localStorage.getItem('token')
    return token ? { Authorization: `Bearer ${token}` } : {}
  }

  const fetchPendingAppointments = async () => {
    try {
      setLoadingPending(true)
      setPendingError('')
      const response = await axios.get(`${API_BASE_URL}/doctor/appointments/pending`, { headers: authHeaders() })
      setPendingAppointments(response.data)
    } catch (err) {
      console.error('Failed to load pending appointments', err)
      setPendingError(err.response?.data?.message || 'Unable to load appointment requests')
    } finally {
      setLoadingPending(false)
    }
  }

  const fetchStats = async () => {
    try {
      setLoadingStats(true)
      const response = await axios.get(`${API_BASE_URL}/doctor/stats`, { headers: authHeaders() })
      setStats(response.data)
    } catch (err) {
      console.error('Failed to load stats', err)
    } finally {
      setLoadingStats(false)
    }
  }

  useEffect(() => {
    fetchPendingAppointments()
    fetchStats()
  }, [])

  const handleDecision = async (appointmentId, decision) => {
    try {
      setProcessingId(appointmentId)
      setPendingError('')
      await axios.post(
        `${API_BASE_URL}/doctor/appointments/${appointmentId}/respond`,
        { decision },
        { headers: authHeaders() }
      )
      await fetchPendingAppointments()
    } catch (err) {
      console.error('Failed to respond to appointment', err)
      setPendingError(err.response?.data?.message || 'Unable to update appointment')
    } finally {
      setProcessingId(null)
    }
  }

  return (
    <DashboardLayout links={doctorLinks} title="Doctor Portal" onLogout={handleLogout}>
      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl shadow-lg p-8 text-white mb-8">
        {error && <p className="text-sm text-red-200 bg-red-900/30 border border-red-400 rounded-lg p-3 mb-4">{error}</p>}
        <h1 className="text-4xl font-extrabold mb-2">
          {loading ? '👨‍⚕️ Loading your dashboard...' : `👨‍⚕️ Welcome back, Dr. ${displayName}!`}
        </h1>
        <p className="text-emerald-100 text-lg">
          Review patient requests, manage appointments, and provide exceptional care.
        </p>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-emerald-500">
          <div className="text-3xl mb-2">👥</div>
          <div className="text-2xl font-bold text-gray-900">{loadingStats ? '...' : stats.totalPatients}</div>
          <div className="text-sm text-gray-600">Total Patients</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-500">
          <div className="text-3xl mb-2">📅</div>
          <div className="text-2xl font-bold text-gray-900">{loadingStats ? '...' : stats.patientsThisWeek}</div>
          <div className="text-sm text-gray-600">This Week</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-yellow-500">
          <div className="text-3xl mb-2">⏳</div>
          <div className="text-2xl font-bold text-gray-900">{pendingAppointments.length}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-purple-500">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-2xl font-bold text-gray-900">4.8</div>
          <div className="text-sm text-gray-600">Rating</div>
        </div>
      </section>

      {/* Appointment Requests Section */}
      <section className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="flex items-center justify-between border-b pb-6">
          <div>
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Patient Requests</p>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Pending Appointment Requests</h2>
          </div>
          <Button variant="outline" onClick={fetchPendingAppointments} disabled={loadingPending}>
            🔄 {loadingPending ? 'Refreshing...' : 'Refresh'}
          </Button>
        </div>

        {pendingError && (
          <div className="text-sm text-red-700 bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
            <p className="font-semibold">⚠️ Error</p>
            <p>{pendingError}</p>
          </div>
        )}
        
        {loadingPending && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">⏳</div>
            <p className="text-gray-600 mt-2">Loading pending appointments...</p>
          </div>
        )}

        {!loadingPending && pendingAppointments.length === 0 && (
          <div className="text-center py-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-dashed border-green-200">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-gray-600 text-lg">All caught up! No pending appointments.</p>
          </div>
        )}

        {!loadingPending && pendingAppointments.length > 0 && (
          <div className="space-y-4">
            {pendingAppointments.map((appointment) => (
              <div 
                key={appointment._id} 
                className="border border-gray-200 rounded-xl p-6 bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all hover:border-emerald-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Patient Info */}
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        {appointment.patientId?.name?.charAt(0) || '?'}
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">{appointment.patientId?.name}</p>
                        <p className="text-sm text-gray-600">{appointment.patientId?.email}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4 bg-white rounded-lg border border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Date & Time</p>
                        <p className="text-sm font-bold text-gray-900">
                          📅 {new Date(appointment.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-600">🕐 {appointment.time}</p>
                      </div>
                      {appointment.reason && (
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold">Reason</p>
                          <p className="text-sm font-medium text-gray-900">{appointment.reason}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Status</p>
                        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">
                          ⏳ Pending
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 lg:flex-col">
                    <Button
                      variant="primary"
                      onClick={() => handleDecision(appointment._id, 'accept')}
                      disabled={processingId === appointment._id}
                      className="flex-1"
                    >
                      {processingId === appointment._id ? '⏳ Processing...' : '✅ Accept'}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleDecision(appointment._id, 'decline')}
                      disabled={processingId === appointment._id}
                      className="flex-1"
                    >
                      {processingId === appointment._id ? '⏳ Processing...' : '❌ Decline'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </DashboardLayout>
  )
}

export default DoctorDashboard


