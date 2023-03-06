import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

import { Card, Text, Button, Input, Group } from "@mantine/core";


function Comment({ comment, setComments, comments, fetchComments, post }) {
    const { token } = useContext(SessionContext);

      // 2. DELETE COMMENT
  async function handleDeleteComment(comment) {
    try {
      await axios.delete(
        `http://localhost:5005/forum//posts/${post._id}/comments/${comment._id}`,
        {
          headers: { Authorization: `holder ${token}` },
        }
      );

      setComments(comments.filter((c) => c._id !== comment._id));
    } catch (error) {
      console.log(error);
    }
  }

  // 3. EDIT COMMENT
  const [isEditingComment, setIsEditingComment] = useState(false);
  const [newCommentContent, setNewCommentContent] = useState(comment.content);

  function handleEditComment(comment) {
    setIsEditingComment(true);
  }

  function handleNewCommentContentChange(e) {
    setNewCommentContent(e.target.value);
  }

  async function handleSaveComment(comment) {
    try {
      const response = await axios.put(
        `http://localhost:5005/forum/posts/${post._id}/comments/${comment._id}`,
        {
          content: newCommentContent,
        },
        {
          headers: { Authorization: `holder ${token}` },
        }
      );
      setComments((prevComments) => {
        return prevComments.map((c) => {
          if (c._id === comment._id) {
            c.content = newCommentContent;
          }
          return c;
        });
      });

      setIsEditingComment(false);

      fetchComments();
    } catch (error) {
      console.log(error);
    }
  }

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

  
  return (
    <Card padding="sm" style={{ marginBottom: "1rem" }}>
      {isEditingComment ? (
        <>
          <Input
            id={`newCommentContent-${comment._id}`}
            value={newCommentContent}
            onChange={handleNewCommentContentChange}
          />
          <Button onClick={() => handleSaveComment(comment)}>Save</Button>
        </>
      ) : (
        <>
                    <Text> Comment: {comment.content} </Text>
                    <Text>
                      By:
                      {comment.author.username[0].toUpperCase() +
                        comment.author.username.slice(1)}{" "}
                    </Text>
                    <Text>
                      Comment created at:
                      {new Date(comment.createdAt).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </Text>

          <Button onClick={() => handleEditComment(comment)}>Edit</Button>
          <Button onClick={() => handleDeleteComment(comment)}>Delete</Button>
        </>
      )}
    </Card>
  )
}

export default Comment