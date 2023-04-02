import "./App.css";
import Row from "./components/Row";
import requests from "./api";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App () {
  
  
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row> 
    </div>
  )
  
}

export default App;