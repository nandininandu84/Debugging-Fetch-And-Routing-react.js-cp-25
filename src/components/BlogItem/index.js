import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {id, title, topic, author, imageUrl, avatarUrl} = eachList
  return (
    <Link to={`/blogs/${id}`} className="text-decoration">
      <div className="item-container">
        <img src={imageUrl} alt={title} className="image-width" />
        <div>
          <p className="text-style">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={author} className="avatar-image" />
            <p className="text-style">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
