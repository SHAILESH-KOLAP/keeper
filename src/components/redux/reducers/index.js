const INIT_STATE = {
  notes: [],
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload.title.length > 0 && action.payload.content.length > 0)
        return {
          ...state,
          notes: [...state.notes, action.payload],
        };
      break;

    case "DELETE":
      const data = state.notes.filter((note) => {
        return note.key !== action.payload;
      });
      return {
        ...state,
        notes: data,
      };

    default:
      return state;
  }
};
export default reducer;
