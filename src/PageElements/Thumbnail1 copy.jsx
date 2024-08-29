import React from 'react';
import './Thumbnail1.css'; // Ensure this CSS file contains styles for the classes used

function Thumbnail1() {
  return (
    <div>
      <div className="card-container">
        <div className="card">
          <a href="https://www.youtube.com/watch?v=TZaMxVgsedQ" target="_blank" rel="noopener noreferrer">
            <div className="thumbnail">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/025/065/804/non_2x/magical-book-with-glitter-exploding-from-the-pages-generative-ai-free-photo.jpg" 
                alt="Thumbnail" 
              />
            </div>
          </a>
          <div className="card-content">
            <a href="https://www.youtube.com/watch?v=TZaMxVgsedQ" target="_blank" rel="noopener noreferrer">
              <strong className="card-category">Category</strong>
              <h3 className="card-title">Post Title</h3>
              <div className="card-date">Nov 12</div>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <div className="card-link">Continue reading...</div>
            </a>
          </div>
        </div>

        {/* Repeat the card structure for more items */}
{/*         <div className="card">
          <a href="https://www.youtube.com/watch?v=TZaMxVgsedQ" target="_blank" rel="noopener noreferrer">
            <div className="thumbnail">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/025/065/804/non_2x/magical-book-with-glitter-exploding-from-the-pages-generative-ai-free-photo.jpg" 
                alt="Thumbnail" 
              />
            </div>
          </a>
          <div className="card-content">
            <a href="https://www.youtube.com/watch?v=TZaMxVgsedQ" target="_blank" rel="noopener noreferrer">
              <strong className="card-category">Category</strong>
              <h3 className="card-title">Post Title</h3>
              <div className="card-date">Nov 12</div>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <div className="card-link">Continue reading...</div>
            </a>
          </div>
        </div> */}









        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default Thumbnail1;
