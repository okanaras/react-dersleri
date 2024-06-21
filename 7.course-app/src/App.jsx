import { useState } from 'react'
import './App.css'
import './css/Course.css'
import Header from './Header';
import { courses } from './Data';
import Course from './Components/Course';

function App() {

  return (
    <>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            // dongulerde mutalaka key ver
            <Course key={course.id} customPropsName={course} />
          ))
        }
      </div>
    </>
  )
}

export default App
