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
                <label>Title:</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                />
            </div>
            <div>
                <label>Content:</label>
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
            <Post key={post._id} post={post} setPosts={setPosts}/>
            ))}
        </div>
        </div>
    );
}

function Post({ post, setPosts }) {
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const {token} = useContext(SessionContext);

    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(post.title);
    const [updatedContent, setUpdatedContent] = useState(post.content);

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
                { content: commentContent }, 
                { headers: { Authorization: `holder ${token}`  } }
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

    
// delete post
    async function handleDeletePost() {
        if (post.author._id !== token.userId) {
            console.log("You're not authorized to delete this post");
            return;
        }

        try {
            await axios.delete(`http://localhost:5005/forum/posts/${post._id}`, {
                headers: { Authorization: `holder ${token}` },
            });

            setPosts((prevPosts) => prevPosts.filter((p) => p._id !== post._id));  
        } catch (error) {
            console.log(error);
        }
    }

//update post
    async function handleUpdatePost(e) {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5005/forum/posts/${post._id}`, 
                { title: updatedTitle, content: updatedContent },
                { headers: { Authorization: `holder ${token}` } }
            );
            setIsEditing(false);
        } catch (error) {
            console.log(error);
        }
    }



    async function handleDeleteComment(commentId) {
        const commentToDelete = comments.find((c) => c._id === commentId);
        if (commentToDelete.author._id !== token.userId) {
            console.log("You're not authorized to delete this comment");
            return;
        }


        try {
            await axios.delete(`http://localhost:5005/forum/posts/${post._id}/comments/${commentId}`, {
                headers: { Authorization: `holder ${token}` },
            });
            setComments((prevComments) => prevComments.filter((comment) => comment._id !== commentId));
        
        } catch (error) {
            console.log(error);
        }
    }

    function handleUpdatedTitleChange(e) {
        setUpdatedTitle(e.target.value);
    }

    function handleUpdatedContentChange(e) {
        setUpdatedContent(e.target.value);
    }

    return (
        <div>
        {isEditing ?  (
            <form onSubmit={handleUpdatePost}>
                <div>
                    <label>Title:</label>
                    <input
                        id="title"
                        value={updatedTitle}
                        onChange={handleUpdatedTitleChange}
                    ></input>
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        id="content"
                        value={updatedContent}
                        onChange={handleUpdatedContentChange}
                    ></textarea>
                </div>
                <button type="submit">Update Post</button>
                <button onClick={handleDeletePost}>Delete Post</button>
            </form>
    ) : (
        <>



        <h2>Post title: {post.title}</h2>
        <p>Post content: {post.content}</p>
        <p>Post author: {post.author.username}</p>

        <button onClick={() => setIsEditing(true)}>Edit Post</button>
        <button onClick={handleDeletePost}>Delete Post</button>
        </>
    )}

        <div>
            <form method="POST" action="/posts/:postId/createcomment" onSubmit={handleCreateComment}>
                <div>
                    <label>Comment:</label>
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
                    <p>Comment content: {comment.content}</p>
                    <p>Comment By: {comment.author.username}</p>
                    <button onClick={() => handleDeleteComment(comment._id)}>Delete Comment</button>
                </div>
            ))}
        </div>
        </div>
    );
}

export default ForumPage;
