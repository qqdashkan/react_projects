import './style.css';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export function SingleCourseInfo() {
  const courses = useSelector((state) => state.courses);
  const params = useParams();
  const course = courses.find((course) => course.title === params.courseId);

  return (
    <>
      {courses.length === 0 ? (
        <p>Course Not Found</p>
      ) : (
        <div className="coursePage">
          <h1>{course.title}</h1>
          <h2>
            <p>Author: </p>
            {course.author}
          </h2>
          <video width="750" height="500" controls>
            <source src={course.link} type="video/mp4" />
          </video>
          <h3>
            <p>Description: </p>
            {course.description}
          </h3>
          <Link className="css-button" to=".." relative="path">
            Back to courses
          </Link>
        </div>
      )}
    </>
  );
}
