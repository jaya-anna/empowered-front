import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { Card, Text, Button, Input, Group } from "@mantine/core";

function Comment({ comment, setComments, comments, fetchComments, post }) {
    const [isEditingComment, setIsEditingComment] = useState(false);
    const [newCommentContent, setNewCommentContent] = useState(comment.content);
    const { token , user } = useContext(SessionContext);

    //  DELETE COMMENT
    async function handleDeleteComment(comment) {
        try {
        await axios.delete(
            `http://localhost:5005/forum//posts/${post._id}/comments/${comment._id}`,
            {
            headers: { authorization: `Bearer ${token}` },
            }
        );

        setComments(comments.filter((c) => c._id !== comment._id));
        } catch (error) {
        console.log(error);
        }
    }

    // EDIT COMMENT
    function handleNewCommentContentChange(e) {
        setNewCommentContent(e.target.value);
    }

    function handleEditComment(comment) {
        setIsEditingComment(true);
    }

    async function handleSaveComment(comment) {
        try {
        const response = await axios.put(
            `http://localhost:5005/forum/posts/${post._id}/comments/${comment._id}`,
            {
            content: newCommentContent,
            },
            {
            headers: { authorization: `Bearer ${token}` },
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

    // OPTIONS FOR DATE FORMATTING
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
  
  return (
    <Card padding="sm" 
                style={{ 
                  display:"block",
                  margin:"20px"

                }}
    >
      {isEditingComment ? (
        <>
          <Input
            id={`newCommentContent-${comment._id}`}
            value={newCommentContent}
            onChange={handleNewCommentContentChange}
          />
          <Button 
            style={{ backgroundColor: "gray"}}
            variant="filled"
          onClick={() => handleSaveComment(comment)}>save</Button>
        </>
      ) : (
        <>
                    <Text size="lg" color="pink" weight="bold"
                      style={{ width:"400px" }}
                    > 
                      {comment.content} 
                    </Text>
                    <Text size="sm" color="yellow" weight="extralight">
                      by {" "}
                      { comment.author
                        ? comment.author.username
                        : "deleted user account"
                      }
                    </Text>
                    <Text size="sm" color="dimmed" weight="thin" >
                      created {" "}
                      {new Date(comment.createdAt).toLocaleDateString(
                        undefined,
                        options
                      )}
                    </Text>



          { comment.author && comment.author._id === user._id && (
                        <div>
                            <Button 
                              onClick={() => handleEditComment(comment)}
                              variant="outline"
                              color="gray"
                              style={{ margin:"10px" }}
                            >edit reply</Button>
                            <Button 
                              onClick={() => handleDeleteComment(comment)}
                              variant="outline"
                              color="gray"
                              >delete</Button>
                        </div>
                    )}
        </>
      )}
    </Card>
  )
}

export default Comment