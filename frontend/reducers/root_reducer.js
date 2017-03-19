import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ProjectReducer from './project_reducer';
import ErrorsReducer from './errors_reducer';
import CommentReducer from './comment_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  projects: ProjectReducer,
  errors: ErrorsReducer,
  comments: CommentReducer
})

export default rootReducer;
