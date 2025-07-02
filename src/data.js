import { type } from "@testing-library/user-event/dist/type";

export const initialFileSystem=[
    {
        id: 1,
        type: "folder",
        name:'src',
        children:[
            { id: 2, type: "file", name:'index.js'},
            { id: 3, type: "file", name:'App.js'},
             {
        id: 4,
        type: "folder",
        name:'components',
        children:[
            { id: 5, type: "file", name:'Header.js'},]
    }
        ]
    },
    
    {
        id:6, type:'file', name:'package.json'
    }
]