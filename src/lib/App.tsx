import React from 'react';
import { FetchState } from '../types';
import { useGetPosts } from './dndapi-test';
import '../App.css';

function App() {
    const [posts, fetchState, getPosts] = useGetPosts();
    return (
        <div className="App" style={{minHeight: '100 vh'}}>
            {fetchState == FetchState.DEFAULT && (
                <>
                    <p>
          Click to get posts from DND API
                    </p>
                    <button onClick={getPosts}>Get Posts</button>
                </>
            )}
            {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
            {fetchState === FetchState.ERROR && (
                <>
                    <p>Something went wrong, try again!</p>
                    <button onClick={getPosts}>Get Posts</button>
                </>
            )}
            {fetchState === FetchState.SUCCESS && (
                <>
                    <p>Here is a list of posts:</p>
                    <ul>
                        {posts.map((post)=> (
                            <li key={post.index}>
                                <h3>
                                    {post.index} - {post.name}
                                </h3>
                                <p>{post.url}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;
