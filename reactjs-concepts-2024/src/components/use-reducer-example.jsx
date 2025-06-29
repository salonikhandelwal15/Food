import {useReducer} from "react";

const initialState={
    showTextFlag:false,
    changeTextStylesFlag:true
};
const HIDE_TEXT="HIDE_TEXT";
const SHOW_TEXT="SHOW_TEXT";
const CHANGE_TEXT_STYLE="CHANGE_TEXT_STYLE";

function reducer(state,action){
    switch(action.type){
        case HIDE_TEXT:
            //console.log(state,action);
            return {
                ...state,
                showTextFlag:false
            }

            case SHOW_TEXT:
            return {
                ...state,
                showTextFlag:true
            }


            case CHANGE_TEXT_STYLE:
            return {
                ...state,changeTextStylesFlag:!state.changeTextStylesFlag
            }


        default:
            return state;
            break;
    }

}
export default function UseReducerExample(){

    const [state,dispatch]=useReducer(reducer,initialState);
    console.log(state);
    return(
        <div>
            {state?.showTextFlag ? <h3 style={{backgroundColor:state?.changeTextStylesFlag?'pink':'red',}}> Use Reducer Hook Example</h3> : null}
            
            {/*<h3>Use Reducer Hook Example</h3>*/}
            <button onClick={()=>dispatch({type:HIDE_TEXT})}>Hide Text</button>
            <button onClick={()=>dispatch({type:SHOW_TEXT})}>Show Text</button>
            <buuton onClick={()=>dispatch({type:CHANGE_TEXT_STYLE})}>Toggle Text Styles</buuton>
        </div>
    );
}