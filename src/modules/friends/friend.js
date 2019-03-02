
/**
 * Action
 * @type {string}
 */
const FRIEND_ALL = 'FRIEND_ALL';

/**
 * Action Creator
 * @param condition 検索条件
 * @returns {{type:FRIEND_ALL,data:condition}}
 */

export const findAll = (condition) => {
    console.log("ActionCreate:","findAll:",condition)
    return {
        type: FRIEND_ALL,
        condition
    }
}

/**
 * Reducer
 * @param state
 * @param action
 */
export const findall_friend_reducer = (state = {data:[]} , action) => {

    console.log("Reducer:","findall_friend_reducer",state,action);

    switch (action.type) {
        case FRIEND_ALL:
            let newState = Object.assign({}, state);
            newState.data = data;
            return newState;
        default:
            return state;
    }
}

const data =
    [
        {
            id: 1 ,name: 'ABC',age: 40
        },
        {
            id: 2, name: 'BCD',age: 48
        },
        {
            id: 3, name: 'CDE',age: 32
        }
    ];

