import './style.css';

import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse } from '../../redux/courses/actionCreators';

export function Courses() {
  const courses = useSelector((state) => state.courses);
  const dicpatch = useDispatch();

  const handleDeleteCourse = (id) => {
    dicpatch(deleteCourse(id));
  };

  return (
    <>
      <header className="courses-header">
        <h1>Courses List</h1>
      </header>
      <main className="course-body">
        {courses.length === 0 ? (
          <>
            <p>
              <strong>No courses avaliable</strong>
            </p>
          </>
        ) : (
          <table className="courses-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th></th>
                <th>Admin</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>
                    <Link to={course.title} className="courseLink">
                      <div>
                        <p>{course.title}</p>
                      </div>
                    </Link>
                  </td>
                  <td>{course.author}</td>
                  <td className="course-description">{course.description}</td>
                  <td>
                    <Link className="css-button btn-active" to={course.title}>
                      View
                    </Link>
                  </td>
                  <td>
                    <div className="edit-delete">
                      <Link
                        className="css-button btn-active"
                        onClick={() => handleDeleteCourse(course.id)}
                      >
                        Delete
                      </Link>
                      <Link className="css-button btn-active">Edit</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="back-add">
          <Link className="css-button" to=".." relative="path">
            Back
          </Link>
          <div className="admin-block">
            <p>Only for administrator </p>
            <NavLink className="link-active" to="add">
              add new course
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
}
