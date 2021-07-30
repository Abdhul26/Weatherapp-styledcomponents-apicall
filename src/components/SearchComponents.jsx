import React from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: auto;
`;
const SearchBox = styled.form`
  align-items: center;
  border: 2px solid purple;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  font-weight: bold;
  color: black;
  & input {
    padding: 10px;
    border: none;
    outline: none;
  }
  & button {
    padding: 10px;

    color: white;
    background-color: black;
  }
`;

const TitleSearch = styled.span`
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 20px;
  letter-spacing: -1.4px;
  word-spacing: 0.6px;
  color: #17054d;
  font-weight: 400;
  text-decoration: none;
  font-style: italic;
  font-variant: small-caps;
  text-transform: lowercase;
`;

const SearchComponents = (props) => {
  const { setCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src="\icons\temp.svg"></WeatherLogo>
      <TitleSearch>Search for your City </TitleSearch>
      <SearchBox onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default SearchComponents;
