import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { SessionContext } from '../contexts/SessionContext';
import { Card, Text, Button, Input, Group, Textarea } from '@mantine/core';
import Post from '../components/Post';

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

    useEffect(()=> {
        console.log(posts)
    }, [posts])

    return (
        <div>

            <h1>Forum</h1>
            <Text>We also value the voices and experiences of our readers, and we encourage you to share your thoughts and feedback in the comments section.</Text>


            <form method="POST" action="/createpost" onSubmit={handleCreatePost}>
                    <Group spacing="lg" direction="column">

                            <Text>Create a new post here:</Text>
                        
                            <label>Post title:</label>
                            <Input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        
                            <label>Post content:</label>
                            <Textarea>
                            <Input
                                id="content"
                                value={content}
                                onChange={handleContentChange}
                            />
                            </Textarea>
                        
                            <Button type="submit">Create Post</Button>

                    </Group>
                </form>



            <Card shadow="sm" padding="sm" style={{ marginBottom: '1rem' }}>
                <Text>Posts created so far below:</Text>
                {posts.map((post) => (
                    <Post key={post._id} post={post} setPosts={setPosts} posts={posts} fetchPosts={fetchPosts} />
                ))}
            </Card>

        </div>
    );
}



export default ForumPage;