import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      title: eachData.title,
      topic: eachData.topic,
      author: eachData.author,
      imageUrl: eachData.image_url,
      avatarUrl: eachData.avatar_url,
    }))
    console.log(updatedData)
    this.setState({blogsList: updatedData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div>
            {blogsList.map(eachList => (
              <BlogItem eachList={eachList} key={eachList.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
export default BlogList
