import React from 'react';

function CreatePost() {
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleCreatePost}>
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
            <textarea
              id="content"
              value={content}
              onChange={handleContentChange}
            ></textarea>
          </div>
          <button type="submit">Create Post</button>
        </form>
    </div>
  );
}

export default CreatePost;
