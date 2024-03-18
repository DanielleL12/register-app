import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Register from './routes/register.tsx'
import Patient, {
  loader as patientLoader
} from './routes/patient.tsx'
import PatientEdit from './routes/patientEdit.tsx'
import Journal, {
  loader as journaLoader,
} from './routes/journal.tsx'
import JournalEdit from './routes/journalEdit.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Register />
      },
      {
        path: 'journal',
        element: <Journal />
      },
      {
        path: 'journal/:journalId/edit',
        element: <JournalEdit />,
        loader: journaLoader,
      },
      {
        path: 'patient',
        element: <Patient />
      },
      {
        path: 'patient/:patientId/edit',
        element: <PatientEdit />,
        loader: patientLoader,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
