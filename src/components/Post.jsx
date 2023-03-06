import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";

import { Card, Text, Button, Input, Group } from "@mantine/core";
import Comment from "./Comment";

function Post({ post, setPosts, posts, fetchPosts }) {
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(post.title);
  const [newContent, setNewContent] = useState(post.content);
  const { token , user } = useContext(SessionContext);

  useEffect(() => {
    fetchComments();
  }, []);

  async function fetchComments() {
    const response = await axios.get(
      `http://localhost:5005/forum/posts/${post._id}/comments`
    );
    setComments(response.data);
  }

  // POSTS
  //1.  UPDATE POST
  function handleNewTitleChange(e) {
    setNewTitle(e.target.value);
  }
  function handleNewContentChange(e) {
    setNewContent(e.target.value);
  }
  async function handleEditPost() {
    setIsEditing(true);
  }
  async function handleSavePost(event) {
    event.preventDefault()
    try {
      const response = await axios.put(
        `http://localhost:5005/forum/posts/${post._id}`,
        {
          title: newTitle,
          content: newContent,
        },
        { headers: { Authorization: `holder ${token}` } }
      );
      fetchComments();
      setIsEditing(false);
      console.log(response.data)
      //setPosts(response.data);
      fetchPosts()
    } catch (error) {
      console.log(error);
    }
  }

  //2.  DELETE POST
  async function handleDeletePost() {
    try {
      await axios.delete(`http://localhost:5005/forum/posts/${post._id}`, {
        headers: { Authorization: `holder ${token}` },
      });

      const filteredPosts = posts.filter((element) => element._id !== post._id);
      setPosts(filteredPosts);
    } catch (error) {
      console.log(error);
    }
  }

  // COMMENTS
  // 1. CREATE COMMENT
  async function handleCreateComment(e) {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5005/forum/posts/${post._id}/createcomment`,
        {
          content: commentContent,
        },
        { headers: { Authorization: `holder ${token}` } }
      );
      setCommentContent("");
      fetchComments();
    } catch (error) {
      console.log(error);
    }
  }
  function handleCommentContentChange(e) {
    setCommentContent(e.target.value);
  }


  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(post.createdAt);

  return (
    <Card shadow="sm" padding="sm" style={{ marginBottom: "1rem" }}>
      <Group spacing="lg" direction="column">
        <Group spacing="lg" direction="column">
          {isEditing ? (
            <>
              <form
                onSubmit={handleSavePost}
              >
                <Input
                  type="text"
                  id="newTitle"
                  value={newTitle}
                  onChange={handleNewTitleChange}
                />
                <Input
                  id="newContent"
                  value={newContent}
                  onChange={handleNewContentChange}
                />
                <Button type="submit">Save post</Button>
              </form>
            </>
          ) : (
            <>
              <Card shadow="sm" padding="sm" style={{ marginBottom: "1rem" }}>
                <Text size="lg" weight={600} style={{ marginBottom: "0.5rem" }}>
                  Post title:{" "}
                  {post.title[0].toUpperCase() + post.title.slice(1)}
                </Text>

                <Text>
                  Post content:{" "}
                  {post.content[0].toUpperCase() + post.content.slice(1)}
                </Text>

                <Text>
                  Post by:{" "}
                  {post.author.username[0].toUpperCase() +
                    post.author.username.slice(1)}
                </Text>

                <Text>
                  Post created at: {date.toLocaleDateString("en-US", options)}
                </Text>

            { post.author._id === user._id && (
                <>
                <Button onClick={() => handleEditPost(post)}>Edit post</Button>
                <Button onClick={handleDeletePost}>Delete Post</Button>
                </>
            )}


              </Card>
            </>
          )}
        </Group>

        {/* CARD FOR COMMENTS */}
        <Card shadow="sm" padding="sm" style={{ marginBottom: "1rem" }}>
          {/* SHOW COMMENTS */}
            <Group direction="column">
            <Text>Comments created so far:</Text>
                {comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} setComments={setComments} comments={comments} fetchComments={fetchComments} post={post} />
                ))}
            </Group>

          {/* LEAVE COMMENT FORM */}
            <form
                method="POST"
                action="/posts/:postId/createcomment"
                onSubmit={handleCreateComment}
            >
                <label>Leave a comment:</label>
                <Input
                    id="content"
                    type="text"
                    value={commentContent}
                    onChange={handleCommentContentChange}
                />

                <Button type="submit">Leave Comment</Button>
            </form>
        </Card>

      </Group>
    </Card>
  );
}

export default Post;
