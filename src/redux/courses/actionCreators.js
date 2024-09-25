import * as type from './actionTypes';

export function addCourse(newCourse) {
  return {
    type: type.ADD_COURSE,
    payload: newCourse,
  };
}

export function deleteCourse(id) {
  return {
    type: type.DELETE_COURSE,
    payload: id,
  };
}

export function editCourse(newInfo) {
  return {
    type: type.EDIT_COURSE,
    payload: newInfo,
  };
}
