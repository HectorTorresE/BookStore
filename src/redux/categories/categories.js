const STATUS = 'book-store//categories/STATUS';
const INITIAL_STATE = [];

export function checkStatus(id) {
  return {
    type: STATUS,
    payload: id,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS:
      return { status: 'Pending' };
    default: return state;
  }
}