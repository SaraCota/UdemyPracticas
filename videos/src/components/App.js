import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (searchterm) => {
    //SOLICITUD DE API ASÍNCRONA
    //HAY QUE USAR UNA PROMESA PARA INTERACTUAR CON ELLO
    const response = await youtube.get("/search", {
      params: {
        q: searchterm,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
