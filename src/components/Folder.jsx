import React, { useContext, useState } from "react";
import File from "./File";
import { FileExplorerContext } from "../FileExplorerContext";

function Folder({ item }) {
  const [open, setOpen] = useState(true);
//   const [newName, setNewName] = useState("");
//   const [showRename, setShowRename] = useState(true);
  const {data, setData}=useContext(FileExplorerContext)

  const addFile = () => {
    const name = prompt("Enter file name:");
    if (!name) return;

    const newFile = {
      id: Date.now(),
      type: "file",
      name: name
    };

    const update = (items) =>
      (items || []).map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            children: [...(i.children || []), newFile]
          };
        } else if (i.children) {
          return { ...i, children: update(i.children) };
        }
        return i;
      });

    setData((prevData)=> update(data));
  };

  const addFolder = () => {
    const name = prompt("Enter folder name:");
    if (!name) return;

    const newFolder = {
      id: Date.now(),
      type: "folder",
      name: name,
      children: []
    };

    const update = (items) =>
      (items || []).map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            children: [...(i.children || []), newFolder]
          };
        } else if (i.children) {
          return { ...i, children: update(i.children) };
        }
        return i;
      });

    setData((prevData)=>update(data));
  };

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

  const deleteFolder = () => {
    const del = (items) =>
      (items || [])
        .filter((i) => i.id !== item.id)
        .map((i) => (i.children ? { ...i, children: del(i.children) } : i));

    setData((prevData)=>del(data));
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <div>
        <span className="actions" onClick={() => setOpen(!open)}>📁  {item.name}</span>
        <button className="add-button" onClick={addFile}>+File</button>
        <button className="add-button" onClick={addFolder}>+Folder</button>
        <button className="rename-button" onClick={rename}>Rename</button>
        <button className="delete-button" onClick={deleteFolder}>Delete</button>
      </div>
      {open &&
        item.children &&
        item.children.map((child) =>
          child.type === "folder" ? (
            <Folder
              key={child.id}
              item={child}
              data={data}
              setData={setData}
            />
          ) : (
            <File key={child.id} item={child} data={data} setData={setData} />
          )
        )}
    </div>
  );
}

export default Folder;