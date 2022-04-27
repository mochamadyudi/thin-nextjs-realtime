import { query , ensureIsUser, getCurrentUser, initThinBackend, logout} from 'thin-backend';
import { useQuery, useCurrentUser } from 'thin-backend/react';
import { DataSubscription } from 'thin-backend';
import { useEffect, useState } from 'react';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function Blog({}) {
    const user = useCurrentUser();
    const queryBuilder = query('users').fetch();

    queryBuilder.then((res)=> {
        console.log(res)
    })
    // console.log(tasksSubscription)
    // console.log()
    return <div>
        <div>Hello {user?.email}</div>
        <div>
            <button onClick={logout}>logout</button>
        </div>
    </div>
}

/* EXAMPLE:
function Posts() {
    const posts = useQuery(query('posts'));
    if (posts === null) {
        return <div>Loading</div>
    }
    return <div>{posts.map(post => <Post post={post} key={post.id} />)}</div>
}

interface PostProps {
    post: Post;
}

function Post({ post }: PostProps) {
    return <div>{post.title}</div>
}
*/

export default Blog;
