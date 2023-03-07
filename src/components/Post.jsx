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
        { headers: { authorization: `Bearer ${token}` } }
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
        headers: { authorization: `Bearer ${token}` },
      });

      const filteredPosts = posts.filter((element) => element._id !== post._id);
      setPosts(filteredPosts);
    } catch (error) {
      console.log(error);
    }
  }

  // COMMENTS
  // CREATE COMMENT
  async function handleCreateComment(e) {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5005/forum/posts/${post._id}/createcomment`,
        {
          content: commentContent,
        },
        { headers: { authorization: `Bearer ${token}` } }
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


  // OPTIONS FOR DATE FORMATTING 
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(post.createdAt);

  return (
    <Card shadow="sm" padding="sm" 
      style={{ margin:"70px 100px 20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center"
            }}
    >

                        {/* POST GROUP */}
        <Group spacing="lg" direction="column"

        >
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
                  style={{width:'350px', margin:"15px"}}
                />
                <Input
                  id="newContent"
                  value={newContent}
                  onChange={handleNewContentChange}
                  style={{width:'600px', margin:"15px"}}
                />
                <Button type="submit"
                        style={{ backgroundColor: "#5b64cf", margin:"15px"}}
                        variant="filled"
                >Save post</Button>
              </form>
            </>
          ) : (
            <>
              <Card shadow="sm" padding="sm" 
                style={{ 
                  display:"block",
                  width:"700px",
                  margin:"40px"

                }}
              >
                <Text size="lg" color="indigo" weight={900} style={{ marginBottom: "20px" }}>
                  {post.title}
                </Text>

                <Text size="md" color="indigo" weight={700} style={{ marginBottom: "10px" }}
                >
                  {post.content}
                </Text>

                <Text size="sm" color="yellow" weight="extralight" >
                  by {" "}
                  { post.author 
                    ? post.author.username[0].toUpperCase() + post.author.username.slice(1)
                    : "deleted user account"
                  }
                </Text>

                <Text size="sm" color="dimmed" weight="thin" >
                  created {date.toLocaleDateString("en-US", options)}
                </Text>

            { post.author && post.author._id === user._id && (
                <div>
                <Button onClick={() => handleEditPost(post)}
                              variant="outline"
                              color="indigo"
                              style={{ margin:"10px" }}
                >edit post</Button>
                <Button onClick={handleDeletePost}
                              variant="outline"
                              color="indigo"
                              style={{ margin:"10px" }}
                >delete</Button>
                </div>
            )}

              </Card>
            </>
          )}
        </Group>


                         {/* CARD FOR COMMENTS */}
        <Card shadow="sm" padding="sm" style={{ marginBottom: "1rem" }}>
          {/* SHOW COMMENTS */}
            <Group direction="column"
              style={{ display:"block" }}
            
            >
                <Text size="sm" color="pink">
                  replies ♡
                </Text>

                {comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} setComments={setComments} comments={comments} fetchComments={fetchComments} post={post} />
                ))}
            </Group>

          {/* LEAVE COMMENT FORM */}
            <form
                method="POST"
                action="/posts/:postId/createcomment"
                onSubmit={handleCreateComment}
                style={{ margin:"30px" }}
            >
                <Input
                    id="content"
                    type="text"
                    style={{width:'400px', margin:"10px"}}
                    value={commentContent}
                    onChange={handleCommentContentChange}
                    placeholder="start writing a reply here"
                />

                <Button type="submit"
                                style={{ backgroundColor: "gray", margin:"10px"}}
                                variant="filled"
                >submit reply</Button>
            </form>
          {/* END OF LEAVE COMMENT FORM */}

        </Card>


    </Card>
  );
}

export default Post;
