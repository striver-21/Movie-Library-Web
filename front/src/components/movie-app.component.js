import React, { useState , useContext  } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./MovieComponent";
import UserContext from "../context/user.context";

export const API_KEY = "afd6951f";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: rgb(248, 249, 250);
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 1px 0 0 grey;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 5px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;
const Placeholder = styled.img`
  width: 100%;
  height: 300px;
  margin: 150px;
  opacity: 50%;
`;

const SignOutArea = styled.div`
    width : 150px;
    height : 30px;
    
`;

function MovieApp() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);

  const [timeoutId, updateTimeoutId] = useState();
  const {setUserData}=useContext(UserContext);
    const logout=()=>{
    setUserData({
        token:undefined,
        user:undefined,
    });
    localStorage.removeItem("jwt");
    window.location='/';
    
    };

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src={require('../Assets/logo.jpg') } />
        </AppName>
        
        <SearchBox>
          <SearchIcon src="/assets/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>

        <SignOutArea>
        <Button onClick={logout} variant="secondary">Sign Out</Button>
        </SignOutArea>
      </Header>
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
            />
          ))
        ) : (
          <Placeholder src="/assets/movie-icon.svg" />
        )}
      </MovieListContainer>
    </Container>
  );
}

export default MovieApp;
