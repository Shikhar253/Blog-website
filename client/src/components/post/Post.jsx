import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="https://source.unsplash.com/random/800x600" alt="" />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet.
            </span>
            <hr />
            <span className="postDa">1 hour ago</span>
        </div>

        </div>
    );
}
