import { createContext, useState } from "react";
import { initialFileSystem } from "./data";

export const FileExplorerContext=createContext();
export const FileExplorerProvider=({children})=>{
    const[data,setData]=useState(initialFileSystem);
    // const[select,setSelected]=useState(null)

    return(
        <FileExplorerContext.Provider value={{data,setData}}>
            {children}
        </FileExplorerContext.Provider>
    )
}