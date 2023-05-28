import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, content, imageUrl, avatarUrl, author} = blogData
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="items-container">
            <div>
              <h1>{title}</h1>
              <div className="avatar-container">
                <img
                  src={avatarUrl}
                  alt={author}
                  className="avatarItem-image"
                />
                <p>{author}</p>
              </div>
              <img src={imageUrl} alt={title} className="image-size" />
              <p className="content">{content}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
