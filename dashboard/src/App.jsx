
import Layout from './layout/Lyout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CourseForm from './page/course/courseForm'

function App() {

  return (
    <>
   
     <BrowserRouter>
     <Layout />
      <Routes>
    <Route path='/' element={<CourseForm />} />

      </Routes>
     </BrowserRouter>
     {/* <CourseForm /> */}
    </>
  )
}

export default App
