import Post from "../post/Post"
import "./posts.css"
//import "../post/Post"

export default function Posts({posts}) {
    return (
        <div className="posts">
        {posts.map((p)=>(
          <Post post={p}/>

        ))}
          



        </div>

    )
}
