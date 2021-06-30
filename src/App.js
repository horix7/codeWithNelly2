import './App.css';
import SearchBox from "./components/searchBox"
import ImageBox from "./components/imageBox";
import { Fragment, useState } from "react";
import Search from "./assets/search.svg";

function App() {
  const [images, setImages] = useState([])
  const [album, setAlbum] = useState("")

  return (
    <div className="App">
      <div>
        <SearchBox setAlbum={setAlbum} setImages={setImages}/>
      </div>
      <div className="flex-images">
        {images.length >= 1 ? images.map(elem => <ImageBox image={elem.thumbnailUrl} url={elem.url} description={elem.title} />) : 
        <Fragment>
          <section className="section">
          <img className="main-bg" src={Search} /> 
          {album !== "" ? <p className="home-message"> no images found for album <span className="album" >{album}</span> </p>: <p className="home-message"> search for images by album id </p>}
          </section>
        </Fragment>
        }
      </div>
   </div>
  );
}

export default App;
