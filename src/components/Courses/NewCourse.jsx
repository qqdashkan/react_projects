import './style.css';

import { Link } from 'react-router-dom';
import { CourseForm } from './CourseForm';

export function AddNewCourse() {
  return (
    <>
      <header className="courses-header">
        <h1>New Course</h1>
      </header>
      <main className="course-body">
        <CourseForm />
        <Link className="css-button" to=".." relative="path">
          Back
        </Link>
      </main>
    </>
  );
}
