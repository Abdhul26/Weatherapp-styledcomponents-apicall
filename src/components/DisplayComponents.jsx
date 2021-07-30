import React from "react";
import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "//icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: auto;
`;
const WeatherCondition = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  font-weight: bold;
  color: black;
  justify-content: space-between;
`;

const Condition = styled.span`
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 15px;
  letter-spacing: -1.4px;
  word-spacing: 0.6px;
  color: #17054d;
  text-decoration: none;
  padding: 20px;
  & span {
    font-size: 20px;
    padding: 5px;
  }
`;

const Location = styled.div`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  font-size: 20px;
  letter-spacing: -0.2px;
  word-spacing: 1.2px;
  color: #2f0072;
  font-weight: normal;
  text-decoration: underline rgb(68, 68, 68);
  font-style: normal;
  font-variant: small-caps;
  text-transform: capitalize;
`;

const WeatherDetails = styled.div`
  align-items: start;
  margin: 20px auto;
  color: black;
`;

const WeatherInfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 10px;
  font-weight: bold;
  color: black;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;

  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const DisplayComponents = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>|{" "}
          {weather?.weather[0]?.description}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}></WeatherLogo>
      </WeatherCondition>
      <Location>{`${weather?.name}|${weather?.sys?.name}`} </Location>
      <WeatherDetails>Weather Details </WeatherDetails>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunrise" : "sunset"}
          value={getTime(weather?.sys[isDay ? "sunrise" : "sunset"])}
        />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
      </WeatherInfoContainer>
    </>
  );
};

export default DisplayComponents;
