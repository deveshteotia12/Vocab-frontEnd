import filterData from './utils'

const INITIAL_STATE={
    actualData: [],
    data: [],
    search: ''
}

const dataReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'UPDATE_DATA':
            return{
                ...state,
                actualData: [...action.payload],
                data: [...action.payload]
            }
        case 'SEARCH_DATA':
            return{
                ...state,
               search: action.payload
            }
        default:
            return state;
    }

}
export default dataReducer;