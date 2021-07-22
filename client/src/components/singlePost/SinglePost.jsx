import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
               <img  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          
          alt="" className="singlePostImg" /> 
          <h1 className="singlePostTiltle">
              Lorem, ipsum dolor sit amet consectetur 
              <div className="singlePostEdit">
              <i className =" singlePostIcon far fa-edit"></i>
              <i className =" singlePostIcon far fa-trash-alt"></i>
              </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor">Author : <b>Shikhar</b></span>
              <span className="singlePostDate">1 hour ago</span>
          </div>
          <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia enim eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque odit totam nulla. Nesciunt quam illum reprehenderit quae tempora cupiditate earum non officiis, ex reiciendis magni amet illo quidem iste rerum. Consectetur impedit reiciendis sit assumenda placeat ea ipsam ad pariatur accusamus laborum fugit sunt at, earum, illo vero eius a nisi quo amet ullam maxime perspiciatis? Laudantium ab quasi deserunt incidunt eveniet debitis tempore quidem qui tempora eligendi molestiae velit perferendis temporibus vitae consequatur at cum assumenda doloremque itaque, inventore mollitia similique molestias quibusdam esse? Est sint rerum animi omnis distinctio eius autem alias. Aliquam dignissimos harum sint, quibusdam voluptate doloribus consectetur a temporibus sequi dolores alias unde corporis minima nobis laborum suscipit ipsam, optio itaque? Quos natus enim excepturi! Dicta, beatae magni.
          </p>
            </div>
        </div>
    )
}
