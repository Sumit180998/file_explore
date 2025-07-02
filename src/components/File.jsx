import React, { useContext } from "react";
import { FileExplorerContext } from "../FileExplorerContext";

function File({ item}) {
    const {data, setData}=useContext(FileExplorerContext)
  const rename = () => {
    const name = prompt("Enter new name:", item.name);
    if (!name) return;

    const update = (items) =>
      (items || []).map((i) => {
        if (i.id === item.id) {
          return { ...i, name: name };
        } else if (i.children) {
          return { ...i, children: update(i.children) };
        }
        return i;
      });

    setData((prevData)=>update(data));
  };

  const deleteFile = () => {
    const del = (items) =>
      (items || [])
        .filter((i) => i.id !== item.id)
        .map((i) => (i.children ? { ...i, children: del(i.children) } : i));

    setData((prevData)=>del(data));
  };

  return (
    <div  >
    <span>📄 {item.name}</span> 
      <button className="rename-button" onClick={rename}>Rename</button>
      <button className="delete-button" onClick={deleteFile}>Delete</button>
    </div>
  );
}

export default File;