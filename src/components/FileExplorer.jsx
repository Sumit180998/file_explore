import React, { useContext } from 'react'
import Folder from './Folder'
import File from './File'
import { FileExplorerContext } from '../FileExplorerContext'

function FileExplorer() {
const {data}= useContext(FileExplorerContext)
  return (
    <div >
      {data?.map((item)=>
      item.type==="folder"?(<Folder key={item.id} item={item} />

      ):(
        <File key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FileExplorer