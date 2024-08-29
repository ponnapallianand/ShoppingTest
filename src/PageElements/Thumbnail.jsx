import React from 'react'
import './Thumbnail.css'

// Select the thumbnail by its ID
//const thumbnail = document.getElementById('thumbnail1');

// Add a click event listener to the thumbnail
//thumbnail.addEventListener('click', function() {
  // Action to perform when the thumbnail is clicked
  //alert('Thumbnail clicked!');

  // Example: Navigate to a new page
  // window.location.href = 'https://www.youtube.com/watch?v=TZaMxVgsedQ';

  // Example: Open a modal (if implemented)
  // modal.style.display = 'block';

  // You can also perform other actions here, such as updating the content dynamically});




function Thumbnail() {
  return (
    <div>
        
<br/>
<div class="card-container" id="cardcontainer">

<div class="card">
    <div class="thumbnail" id="thumbnail1">
    <img src="https://static.vecteezy.com/system/resources/previews/025/065/804/non_2x/magical-book-with-glitter-exploding-from-the-pages-generative-ai-free-photo.jpg" alt="Thumbnail image"/>
    </div>
    <div class="card-content">
      <strong class="card-category">Category</strong>
      <h3 class="card-title">Post Title</h3>
      <div class="card-date">Nov 12</div>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
      <a href="https://www.youtube.com/watch?v=TZaMxVgsedQ" class="card-link">Continue reading...</a>
    </div>
  </div>

  <div class="card">
    <div class="thumbnail">
    <img src="https://static.vecteezy.com/system/resources/previews/025/065/804/non_2x/magical-book-with-glitter-exploding-from-the-pages-generative-ai-free-photo.jpg" alt="Thumbnail 1"/>
      
    </div>
    <div class="card-content">
      <strong class="card-category">Category 1</strong>
      <h3 class="card-title">Card Title 1</h3>
      <div class="card-date">Date 1</div>
      <p class="card-text">This is a brief description for the first card.</p>
      <a href="https://www.youtube.com/watch?v=TZaMxVgsedQ" class="card-link">Continue reading...</a>
    </div>
  </div>

  <div class="card">
    <div class="thumbnail">
      <img src="https://static.vecteezy.com/system/resources/previews/025/065/804/non_2x/magical-book-with-glitter-exploding-from-the-pages-generative-ai-free-photo.jpg" alt="Thumbnail 2"/>
    </div>
    <div class="card-content">
      <strong class="card-category">Category 2</strong>
      <h3 class="card-title">Card Title 2</h3>
      <div class="card-date">Date 2</div>
      <p class="card-text">This is a brief description for the second card.</p>
      <a href="#" class="card-link">Continue reading...</a>
    </div>
  </div>

  <div class="card">
    <div class="thumbnail">
      <img src="https://st.depositphotos.com/1000423/4130/i/450/depositphotos_41303041-stock-photo-magic-book.jpg" alt="Thumbnail 3"/>
    </div>
    <div class="card-content">
      <strong class="card-category">Category 3</strong>
      <h3 class="card-title">Card Title 3</h3>
      <div class="card-date">Date 3</div>
      <p class="card-text">This is a brief description for the second card.</p>
      <a href="#" class="card-link">Continue reading...</a>
    </div>
  </div>

  <div class="card">
    <div class="thumbnail">
      <img src="https://st.depositphotos.com/1000423/4130/i/450/depositphotos_41303041-stock-photo-magic-book.jpg" alt="Thumbnail 4"/>
    </div>
    <div class="card-content">
      <strong class="card-category">Category 3</strong>
      <h3 class="card-title">Card Title 3</h3>
      <div class="card-date">Date 3</div>
      <p class="card-text">This is a brief description for the second card.</p>
      <a href="#" class="card-link">Continue reading...</a>
    </div>
  </div>
  
</div>




        
    </div>
  )
}

export default Thumbnail