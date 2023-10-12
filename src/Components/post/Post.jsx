import './Post.css'
import postImage from '../../assets/postImage.jpg'

const Post = () => {
    return (
        <div className='post'>
            <img className='postImg' src={postImage} alt="" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className='postCategory'>Music</span>
                    <span className='postCategory'>Life</span>
                </div>
                <span className='postTitle'>
                    Lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate">
                    1 hour ago
                </span>
                <p className='postDescription'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptas ea veritatis deserunt esse harum veniam. Quam sed consequatur, tempore possimus, soluta pariatur animi consectetur fuga debitis quo modi laboriosam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptas ea veritatis deserunt esse harum veniam. Quam sed consequatur, tempore possimus, soluta pariatur animi consectetur fuga debitis quo modi laboriosam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptas ea veritatis deserunt esse harum veniam. Quam sed consequatur, tempore possimus, soluta pariatur animi consectetur fuga debitis quo modi laboriosam.</p>
            </div>
        </div>
    );
};

export default Post;