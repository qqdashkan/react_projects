import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse } from '../../../redux/courses/actionCreators';
import './style.css';

export function CourseForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    link: '',
    description: '',
  });

  const dicpatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    if (formData) {
      const num = Math.floor(Math.random() * 99);
      dicpatch(addCourse({ ...formData, id: `${num}` }));
    }
  }
  return (
    <div className="myform">
      <h2 className="fs-title">Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="info-area">
          <label htmlFor="title">
            <h3 className="fs-subtitle">Title: </h3>
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(event) =>
              setFormData({ ...formData, title: event.target.value })
            }
          />
        </div>
        <div className="info-area">
          <label htmlFor="author">
            <h3 className="fs-subtitle">Author: </h3>
          </label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(event) =>
              setFormData({ ...formData, author: event.target.value })
            }
          />
        </div>
        <div className="info-area">
          <label htmlFor="link">
            <h3 className="fs-subtitle">Link: </h3>
          </label>
          <input
            type="text"
            id="link"
            value={formData.link}
            onChange={(event) =>
              setFormData({ ...formData, link: event.target.value })
            }
          />
        </div>
        <div className="info-area">
          <label htmlFor="description">
            <h3 className="fs-subtitle">Description: </h3>
          </label>
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
        </div>
        <button className="action-btn" type="submit">
          Add course
        </button>
      </form>
    </div>
  );
}
