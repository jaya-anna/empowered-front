import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

import { Card, Text, Button, Input, Group } from "@mantine/core";


function Comment({ comment, handleDeleteComment, handleEditComment, handleSaveComment, newCommentContent, handleNewCommentContentChange, isEditingComment }) {
  
  return (
    <Card padding="sm" style={{ marginBottom: "1rem" }}>
      {isEditingComment ? (
        <>
          <Input
            id={`newCommentContent-${comment._id}`}
            value={newCommentContent}
            onChange={handleNewCommentContentChange}
            placeholder={comment.content}
          />
          <Button onClick={() => handleSaveComment(comment)}>Save</Button>
        </>
      ) : (
        <>
          <Text>{comment.content}</Text>
          <Button onClick={() => handleEditComment(comment)}>Edit</Button>
          <Button onClick={() => handleDeleteComment(comment)}>Delete</Button>
        </>
      )}
    </Card>
  )
}

export default Comment