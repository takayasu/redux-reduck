
/**
 * Action
 * @type {string}
 */
const ADD_COUNT = 'ADD_COUNT';

/**
 * Action Creator
 * @param count インクリメントする数値
 * @returns {{count: *, type: int}}
 */

export const increment = (count) => {
    return {
        type: ADD_COUNT,
        value: count
    }
}

/**
 * Reducer
 * @param state
 * @param action
 */
export const increment_reduxer = (state = [] , action) => {

    console.log("Reducer:","increment_reducer",state,action);

    switch (action.type) {
        case ADD_COUNT:
            return {...state,count: state.count + action.value};
        default:
            return state;
    }
}

