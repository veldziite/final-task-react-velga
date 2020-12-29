import PostEntry from '../Components/Post';
import useAxiosGet from '../Hooks/UseAxiosGet.js';

function BlogPosts() {
    const entries = useAxiosGet('chat');

    let content = '';
    if (entries.loading) {
        content = <h4>Loading ...</h4>
    } else if (entries.data.length === 0) {
        content = <h4>No posts found</h4>
    } else {
        content = (
            <ul className="list-group">
                {entries.data.map((entry) => <PostEntry key={entry._id} entry={entry} />)}
            </ul>
        )
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default BlogPosts;