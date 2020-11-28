import React from 'react'

const Footer = (props) => {
    return (
  
  <div>
    <footer>
      <div className="container">
        <div className="row footer-row">
          <div className="col-4 google-books-link">
            <a href="https://books.google.com/">GOOGLE BOOKS</a>
          </div>
          <div className="col-4 about-link">
            <a href="https://books.google.com/intl/en/googlebooks/about/index.html">ABOUT</a>
          </div>
          <div className="col-4 google-search-link">
            <a href="https://google.com/">GOOGLE SEARCH</a>
          </div>
        </div>
      </div>
    </footer>
    <div className="col copyright">&copy;2020</div>
  </div>
  
    )
}

export default Footer