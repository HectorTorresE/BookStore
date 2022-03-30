const STATUS = 'book-store//categories/STATUS';
const INITIAL_STATE = [];

export const checkStatus = (id) => ({
  type: STATUS,
  obj: id,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS:
      return { status: 'Pending' };
    default: return state;
  }
};

export default reducer;
