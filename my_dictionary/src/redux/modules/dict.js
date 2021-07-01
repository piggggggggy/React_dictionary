// dictionary.js

// firestore 객체 가져오기
// import { DOCUMENT_POSITON_CONTAINED_BY } from "min-document";
import { firestore } from "../../firebase.js";

// collection 전역변수
const dict_db = firestore.collection("dict");



// Actions
const LOAD = "dict/LOAD"
const CREATE = "dict/CREATE"
// const DELETE = "dict/DELETE"
// const EDIT = "dict/EDIT"
// const LOADED = "dict/LOADED"


// initialState
const initialState = {
    list: [
        {word: "0하~", pronounce: "-ha~", discription: "'00 하이'의 줄임말", example: "경원 하이 => 경하~", completed: false},
        {word: "맛점", pronounce: "mat-jeom", discription: "'맛있는 점심'의 줄임말", example: "맛점 하세요~", completed: false},
    ]

};




// Action Creators
export const loadDict = (dict) => {
    return {type: LOAD, dict};
};

export const createDict = (dict) => {
    return {type: CREATE, dict};
};

// export const deleteDict = (dict) => {
//     return {type: DELETE, dict};
// };

// export const editDict = (dict) => {
//     return {type: EDIT, dict};
// };



// 통신함수
// load
export const loadDictFB = () => {
    return function (dispatch) {
        dict_db.get().then((docs) => {
            let dict_data = [];
            docs.forEach((doc) => {
                console.log(doc);
                console.log(doc.data);
                console.log(doc.id);

                if(doc.exists){
                    dict_data = [...dict_data, {id: doc.id, ...doc.data()}];
                }
            });
            console.log(dict_data);
            dispatch(loadDict(dict_data));
        });
    };
};
// create
export const createDictFB =  (dict) => {
    return function (dispatch) {
        let dict_data = {word: dict.word, pronounce: dict.pronounce, discription: dict.discription, example: dict.example, completed: false};
        console.log(dict_data);
        dict_db.add(dict_data).then(docRef => {
            dict_data = {...dict_data, id: docRef.id};
            console.log(dict_data);
            dispatch(createDict(dict_data));
        });
        
    };
};


// edit


//delete





// reducer
export default function reducer(state = initialState, action ={}) {
    switch (action.type) {
        //do reducer stuff
        case "dict/LOAD": {
            if (action.dict.length >0){
                return { list: action.dict}
            };
            return state;
        }

        case "dict/CREATE":
            const new_dict_list = [...state.list, action.dict];
            console.log(new_dict_list);
            return { list: new_dict_list };
            

    
        default: 
            return state;
    }
}

