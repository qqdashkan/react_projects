import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Courses } from './components/Courses';
import { SingleCourseInfo } from './components/Courses/SingleCourse';
import { AddNewCourse } from './components/Courses/NewCourse';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Signup />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<SingleCourseInfo />} />
          <Route path="/courses/add" element={<AddNewCourse />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
