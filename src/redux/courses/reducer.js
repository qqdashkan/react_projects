import * as type from './actionTypes';

const initialState = [
  {
    title: 'Продвинутый онлайн-курс по Backend',
    author: 'lectrum',
    link: 'https://www.youtube.com/watch?v=_GJKAs7A0_4&ab_channel=NetNinja',
    description:
      'Данный курс позволяет в короткий срок освоить навык создания RESTfull API приложений на платформе Node.js. ',
    id: '83',
  },
  {
    title: 'React - Полный Курс по React',
    author: 'udemy',
    link: 'https://www.youtube.com/watch?v=_GJKAs7A0_4&ab_channel=NetNinja',
    description:
      'Если вы хотите стать успешным React программистом - этот курс для вас. Это лучший курс для понимания React, изучения всех ключевых функций React, а также закрепления всех полученных знаний на практике с помощью десятков задач. ',
    id: '96',
  },
];

export function courseReducer(state = initialState, action) {
  switch (action.type) {
    case type.ADD_COURSE:
      return [...state, action.payload];

    case type.DELETE_COURSE:
      return state.filter((course) => course.id !== action.payload);

    case type.EDIT_COURSE:
      return [...state, { ...action.payload }];

    default:
      return state;
  }
}
