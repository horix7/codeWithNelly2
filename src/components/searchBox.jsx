import { Component, Fragment } from "react"
import { fetchImages } from "../services/fetchImages.service";

export default class SearchBox extends Component {

    state = {
        images: [],
        error: false,
        loading: false
    }

    fetchAlbumPhotos = async () => {
        this.setState({loading: true})
        const images = await fetchImages(this.state.value)
        
        if(images.status) {
        this.setState({images: images.data, loading: false, error: false})
        this.props.setImages(images.data)
        this.props.setAlbum(this.state.value)

        window.location.href = "#"
        } else {
            this.setState({images: [], error: true,loading: false, }) 
            this.props.setAlbum(this.state.value)
            
        }   
    }

    handleSearchInput = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        
        return (
        <Fragment>
            <div className="nav">
              <div className="search-box">
                <input type="text" onKeyDown={(event) => {
                   if(event.key === "Enter") {
                        this.fetchAlbumPhotos()
                    } placeholder="type album id to fetch images" onChange={this.handleSearchInput} className="search-input"/>
                <button className="go" onClick={this.fetchAlbumPhotos}>
                    {this.state.loading ? <div className="loader"> </div>: "Get Album Photos By Id"}
                </button>
            </div>  
            <div className="challenge">
                <div>
               <h2>code with nelly challenge two</h2>
                <p>made with react</p>
               </div>
               <img src="https://s.taplink.ru/a/b/1/2/e/2b7705.jpg" width="60px" alt=""/>
            </div>
        </div>
        </Fragment>
        )
    }
}
