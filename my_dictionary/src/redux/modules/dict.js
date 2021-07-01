// dictionary.js

// firestore 객체 가져오기
import { DOCUMENT_POSITON_CONTAINED_BY } from "min-document";
// import { firestore } from "../../firebase.js";

// collection 전역변수
// const dict_db = firestore.collection("dict");



// Actions
const LOAD = "dict/LOAD"
const CREATE = "dict/CREATE"
const DELETE = "dict/DELETE"
const EDIT = "dict/EDIT"
const LOADED = "dict/LOADED"


// initialState
const initialState = {

};




// Action Creators
export const loadDict = (dict) => {
    return {type: LOAD, dict}
}

export const createDict = (dict) => {
    return {type: LOAD, dict}
}

export const deleteDict = (dict) => {
    return {type: LOAD, dict}
}

export const editDict = (dict) => {
    return {type: LOAD, dict}
}



// 통신함수
// load


// add


// edit


//delete





// reducer
export default function reducer(state = initialState, action ={}) {
    switch (action.type) {
        //do reducer stuff
        
        
    }
}

