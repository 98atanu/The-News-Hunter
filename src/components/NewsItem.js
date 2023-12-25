import React, { Component } from 'react'

export default class NewsItem extends Component {

    
  render() {
    let {title,description,imageUrl,newsUrl,author,date} = this.props
    return (
      <div className='my-3'>
        <div className="card" >
  <img src={!imageUrl?"https://cms.therecord.media/uploads/pexels_photomix_company_5494323_4f252d0a34.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small>By {!author?"Unknown":author} on {new Date(date).toTimeString()}</small></p>

    <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
