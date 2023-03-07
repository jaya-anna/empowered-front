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

console.log(token);

        try {
        await axios.post('http://localhost:5005/forum/createpost', { title, content }, {headers: { authorization: `Bearer ${token}`  } }
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
        <div style={{  
            margin: "auto", padding: "80px 200px 0",
            display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"
            }} >

            <h1 style={{ color: "#5b64cf" , marginLeft: "250px" }}>forum</h1>

            <Text size="lg" align='center'
                style={{ color: "#5b64cf" , 
                margin:"20px 100px 15px" , 
                }}
                >We also value the <b>voices</b> of our readers, so we encourage you to share your questions and experiences in the comments section. <sup>*, **</sup>
            </Text>

            <Text 
                style={{ color: "grey" ,  textAlign:"center", fontSize:"12px" }}
                >
                *this page is not a substitute for professional medical advice
            </Text>

            <Text 
                style={{ color: "grey" ,  textAlign:"center", fontSize:"12px" }}
                >
                **individual experiences may vary
            </Text>


            <form method="POST" action="/createpost" onSubmit={handleCreatePost}>
                    <Group 
                        spacing="lg" 
                        direction="column" 
                        style={{ margin:"35px", display: "flex", flexDirection:"column"
                    }} >
                        

                            <Input
                                type="text"
                                id="title"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="post title"
                            />

                            <Input
                                id="content"
                                value={content}
                                onChange={handleContentChange}
                                placeholder="post content"
                            />
                        
                            <Button 
                                type="submit"
                                style={{ backgroundColor: "#5b64cf"}}
                                variant="filled"
                            >
                                create post
                            </Button>

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