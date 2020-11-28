import React from 'react'

const Footer = (props) => {
    return (
  
  <div>
    <footer>
      <div className="container">
        <div className="row footer-row">
          <div className="col-4 google-books-link">
            <a href="https://books.google.com/" target="_blank">GOOGLE BOOKS</a>
          </div>
          <div className="col-4 about-link">
            <a href="https://books.google.com/intl/en/googlebooks/about/index.html" target="_blank">ABOUT</a>
          </div>
          <div className="col-4 google-search-link">
            <a href="https://books.google.com/intl/en/googlebooks/perspectives/facts.html" target="_blank">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
    <div className="col copyright">&copy;2020</div>
  </div>
  
    )
}

export default Footer