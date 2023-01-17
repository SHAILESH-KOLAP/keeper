export const CREATE = (note) => {
  return {
    type: "ADD",
    payload: note,
  };
};

export const DELETE = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
