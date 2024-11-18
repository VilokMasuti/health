import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2 } from 'lucide-react'

export default function ModernHealthcareDashboard() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [file, setFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [activeTab, setActiveTab] = useState('input')
  const [records, setRecords] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      const newRecord = { id: Date.now(), name, age, file: file ? file.name : 'No file uploaded' }
      setRecords([...records, newRecord])
      setSubmitMessage('Information submitted successfully!')
      setIsSubmitting(false)
      setName('')
      setAge('')
      setFile(null)
      setActiveTab('summary')
    }, 1500)
  }

  const handleDelete = (id) => {
    setRecords(records.filter(record => record.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-50 shadow-2xl py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Healthcare Dashboard</h1>

            <div className="flex mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('input')}
                className={`flex-1 py-2 px-4 rounded-l-md text-sm font-medium transition-colors duration-200 ${activeTab === 'input' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                Input
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('summary')}
                className={`flex-1 py-2 px-4 rounded-r-md text-sm font-medium transition-colors duration-200 ${activeTab === 'summary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                Summary
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'input' ? (
                <motion.form
                  key="input"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                      Patient Age
                    </label>
                    <select
                      id="age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    >
                      <option value="">Select Age</option>
                      {Array.from({ length: 101 }, (_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                      Upload File
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900">Patient Records</h2>
                  {records.length === 0 ? (
                    <p className="text-gray-500">No records submitted yet.</p>
                  ) : (
                    <ul className="divide-y divide-gray-200">
                      {records.map((record) => (
                        <li key={record.id} className="py-4 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{record.name}</p>
                            <p className="text-sm text-gray-500">Age: {record.age}</p>
                            <p className="text-sm text-gray-500">File: {record.file}</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDelete(record.id)}
                            className="text-red-600 hover:text-red-800 transition-colors duration-200"
                          >
                            <Trash2 className="h-5 w-5" />
                          </motion.button>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {submitMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 text-sm text-green-600 text-center"
              >
                {submitMessage}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}