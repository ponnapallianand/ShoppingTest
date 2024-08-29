import React from 'react';
import './App.css';
import Navbar from './navbar';
import Blog from './Blog';
import Thumbnail from './PageElements/Thumbnail';
import Thumbnail1 from './PageElements/Thumbnail1';
import NavList from './PageElements/NavList';
import ButtonList from './PageElements/ButtonList';
import ContentText from './PageElements/ContentText';
import OffCanvas from './PageElements/OffCanvas';
import ImageSlider1 from './PageElements/ImageSlider1';
import useScrollHandler from './scrollHandler'; // Import your scroll handler



function App() {
  useScrollHandler(); // Apply scroll handler

  return (
    <div className="App">
      <Navbar />
      <ImageSlider1 />
      <OffCanvas />
      <Thumbnail1 />
     {/*  <Blog /> */}
      {/* <Thumbnail /> */}
      {/* <NavList /> */}
      {/* <ButtonList /> */}
     {/*  <ContentText /> */}
    </div>
  );
}

export default App;
