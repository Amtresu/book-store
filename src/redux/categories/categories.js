export function checkStatus(){
    return{ 
        type: CHECK_STATUS
    }
}

const CHECK_STATUS = 'CHECK_STATUS';
const intialState = []

function categoryReducer(state = intialState, action){
    switch(action.type){
        case    CHECK_STATUS:
            return 'Under Construction'
        default: 
            return state
            
    }
        
}

export default  categoryReducer