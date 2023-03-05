import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';

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
            <div>
                <label htmlFor="title">Title:</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <input
                id="content"
                value={content}
                onChange={handleContentChange}
                ></input>
            </div>
            <button type="submit">Create Post</button>
            </form>
        </div>
        <div>
            {posts.map((post) => (
            <Post key={post._id} post={post} />
            ))}
        </div>
        </div>
    );
}

function Post({ post }) {
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
        <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.author.username}</p>

        <button onClick={handleDeletePost}>Delete Post</button>

        <div>
            <form method="POST" action="/posts/:postId/createcomment" onSubmit={handleCreateComment}>
                <div>
                    <label htmlFor="content">Comment:</label>
                    <input
                    id="content"
                    value={commentContent}
                    onChange={handleCommentContentChange}
                    ></input>
                </div>
            <button type="submit">Create Comment</button>
            </form>
        </div>

        <div>
            {comments.map((comment) => (
                <div key={comment._id}>
                    <p>Comment: {comment.content}</p>
                    <p>By: {comment.author.username}</p>
                    <button onClick={() => handleDeleteComment(comment)}>Delete Comment</button>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ForumPage;