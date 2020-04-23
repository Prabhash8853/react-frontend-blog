import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  editorPickData: [],
  error: null,
  loading: true
};

const EditorPickStart = (state, action) => {
  return updateObject(state, {
    editorPickData: [],
    error: null,
    loading: true
  });
};

const EditorPickSuccess = (state, action) => {
  return updateObject(state, {
    editorPickData: action.payload,
    error: null,
    loading: false
  });
};

const EditorPickFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const EditorPickReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDITOR_PICK_SUCCESS:
      return EditorPickSuccess(state, action);
    case actionTypes.EDITOR_PICK_FAIL:
      return EditorPickFail(state, action);
    case actionTypes.EDITOR_PICK_START:
      return EditorPickStart(state, action);
    default:
      return state;
  }
};

export default EditorPickReducer;
