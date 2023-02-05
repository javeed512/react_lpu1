

import React from 'react'

const initialState = 0;
export default function changeTheNumber(state =initialState ,action) {

    switch(action.type){

            case 'INCREMENT': return state + 1;
            case 'DECREMENT': return state - 1;
            default : return state;


    }


}
