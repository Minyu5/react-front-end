function project(state = {}, action) {
  switch(action.type) {
    case 'PROJECT_FETCHED':
      return action.result;
    default:
      return state;
  }
}

export default project;
