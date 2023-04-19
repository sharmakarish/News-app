import React from 'react'

const NewsItem = (props) => {

    let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className='my-3' >
       <div className="card" >
        <div style={ {
          display: 'flex',
          justifycontent: 'flex-end',
          position: 'absolute',
          right: '47px',}
        }>
       <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left: '90%', zIndex: '1'}}>{source}</span>
       </div>
  <img src={!imageUrl?"https://www.shutterstock.com/shutterstock/photos/2224601307/display_1500/stock-vector-taaza-khabar-you-see-it-here-first-vector-mascot-logo-template-2224601307.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )

}

export default NewsItem
