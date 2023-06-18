import React, { useState } from "react";
import Comment from "./components/comment";
import useNode from "./hooks/useNode";
import "./styles.css";

const comments = {
  id: 1,
  items: [
    {
      id:167776523236,
      name:'hello',
      items: [
        {
          id:167776523237,
          name:'hello world',
          items: [{
            id:167776523232,
            name:'hello world 123',
            items:[]
          }
        ]
        }
      ]
    },
    {
      id:167776523231,
      name:'react',
      items: [
        {
          id:167776523,
          name:'javascript',
        }
      ]
    }
  ]
};

export default function App() {
  const [commentData, setCommentData] = useState(comments);
  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, value) => {
    const finalStructure = insertNode(commentData, folderId, value);
    setCommentData(finalStructure);
  };
  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentData, folderId, value);
    setCommentData(finalStructure);
  };
  const handledeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentData, folderId);
    const temp = { ...finalStructure };
    setCommentData(temp);
  };

  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handledeleteNode={handledeleteNode}
        comment={commentData}
      />
    </div>
  );
}
