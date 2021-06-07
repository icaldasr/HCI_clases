export const setTitle = (newTitle) => (dispatch) => {
    dispatch({
        type: 'SET_TITLE',
        payload: { newTitle}
    });
}