import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';

import { Card, Text, Button, Input, Group } from '@mantine/core';

function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {token} = useContext(SessionContext);



    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        const response = await axios.get('http://localhost:5005/forum/posts');
        setPosts(response.data);
    }

    async function handleCreatePost(e) {
        e.preventDefault();
        try {
        await axios.post('http://localhost:5005/forum/createpost', { title, content }, {headers: { Authorization: `holder ${token}`  } }
        );
        setTitle('');
        setContent('');
        fetchPosts();
        } catch (error) {
        console.log(error);
        }
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }

    function handleContentChange(e) {
        setContent(e.target.value);
    }

    return (
        <div>
        <h1>Forum</h1>
        <p>We also value the voices and experiences of our readers, and we encourage you to share your thoughts and feedback in the comments section.</p>
        <div>
        <form method="POST" action="/createpost" onSubmit={handleCreatePost}>
                <Group spacing="lg" direction="column">
                    
                        <label>Post title:</label>
                        <Input
                            type="text"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    
                        <label>Post content:</label>
                        <Input
                            id="content"
                            value={content}
                            onChange={handleContentChange}
                        />
                    
                        <Button type="submit">Create Post</Button>
                </Group>
            </form>
        </div>

        <div>
            <Card shadow="sm" padding="sm" style={{ marginBottom: '1rem' }}>
                {posts.map((post) => (
                    <Post key={post._id} post={post} setPosts={setPosts} posts={posts}/>
                ))}
            </Card>
        </div>

        </div>
    );
}

function Post({ post, setPosts, posts }) {
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const {token} = useContext(SessionContext);

    useEffect(() => {
        fetchComments();
    }, []);

    async function fetchComments() {
        const response = await axios.get(`http://localhost:5005/forum/posts/${post._id}/comments`);
        setComments(response.data);
    }

    async function handleCreateComment(e) {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5005/forum/posts/${post._id}/createcomment`, 
                {
                    content: commentContent,
                },
                {headers: { Authorization: `holder ${token}`  } }
                );
            setCommentContent('');
            fetchComments();
        } catch (error) {
        console.log(error);
        }
    }

    function handleCommentContentChange(e) {
        setCommentContent(e.target.value);
    }

    async function handleDeletePost() {
        try {
            await axios.delete(`http://localhost:5005/forum/posts/${post._id}`, {
                headers: { Authorization: `holder ${token}` },
            });

            const filteredPosts = posts.filter(element => element._id !== post._id);
            setPosts(filteredPosts);
        } catch (error) {
            console.log(error);
        }
    }


    //update post
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    function handleNewTitleChange(e) {
        setNewTitle(e.target.value);
    }
    function handleNewContentChange(e) {
        setNewContent(e.target.value);
    }
    async function handleEditPost() {
        setIsEditing(true);
    }
    async function handleSavePost() {
        try {
            const response = await axios.put(`http://localhost:5005/forum/posts/${post._id}`, 
                {
                title: newTitle,
                content: newContent,
                },
                {headers: { Authorization: `holder ${token}`  } }
            );
            fetchComments();
            setIsEditing(false);
            setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
    }



    async function handleDeleteComment(comment) {
        try {
            await axios.delete(`http://localhost:5005/forum//posts/${post._id}/comments/${comment._id}`, {
                headers: { Authorization: `holder ${token}` },
            });

            setComments(comments.filter(c => c._id !== comment._id));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card shadow="sm" padding="sm" style={{ marginBottom: '1rem' }}>
        <Group spacing="lg" direction="column">
            <Group spacing="lg" direction="column">
                {isEditing ? (
                <>
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
                    <Button onClick={handleSavePost}>Save post</Button>
                </>
                ) : (
                <>
                    <Card shadow="sm" padding="sm" style={{ marginBottom: '1rem' }}>
                            <Text size="lg" weight={600} style={{ marginBottom: '0.5rem' }}>
                                {post.title}
                            </Text>

                            <Text>
                                {post.content}
                            </Text>

                            <Text>
                                {post.author.username}
                            </Text>

                            <Button onClick={handleEditPost}>Edit post</Button>
                            <Button onClick={handleDeletePost}>Delete Post</Button>
                    </Card>

                </>
                )}
            </Group>

        

        <div>
            <form method="POST" action="/posts/:postId/createcomment" onSubmit={handleCreateComment}>

                <Group spacing="lg" direction="column">
                    
                        <label>Comment:</label>
                        <Input
                            id="content"
                            value={commentContent}
                            onChange={handleCommentContentChange}
                        />
                    
                    <Button type="submit">Create Comment</Button>

                </Group>
            </form>
        </div>

        <div>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <Text>  Comment: {comment.content} </Text>  
                    <Text>  By: {comment.author.username}  </Text> 
                    <Button onClick={() => handleDeleteComment(comment)}>Delete Comment</Button>
                </div>
            ))}
        </div>
        </Group>
        </Card>
    );
}

export default ForumPage;