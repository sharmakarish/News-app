import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3' >
       <div className="card" >
  <img src={!imageUrl?"https://www.shutterstock.com/shutterstock/photos/2224601307/display_1500/stock-vector-taaza-khabar-you-see-it-here-first-vector-mascot-logo-template-2224601307.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
