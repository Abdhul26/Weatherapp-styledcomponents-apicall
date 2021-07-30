import styled from "styled-components";
import DisplayComponents from "./components/DisplayComponents";
import SearchComponents from "./components/SearchComponents";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const API = "6b1d0249ffd43328b9a307260909a95c";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border: 1px solid gray;
  border-radius: 7px;
  box-shadow: -6px 6px 8px -2px #000000;
  width: 70vh;
`;

const AppLabel = styled.span`
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-style: oblique;
  font-variant: small-caps;
  text-transform: capitalize;
`;

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
    );
    setWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather ? (
        <DisplayComponents weather={weather} />
      ) : (
        <SearchComponents setCity={setCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
