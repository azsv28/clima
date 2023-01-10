import React from 'react';
import Spinner from './Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({loadingData, showData, weather, forecast}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";
    var iconUr22 = "";
    var iconUr25 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";
    var forecastDate12 = "";
    var forecastDate15 = "";

    if(loadingData){
        return  <Spinner />;
    }
    //funsion para traer las predicsiones en el tienpo
    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";
        iconUr22 = url + forecast.list[4].weather[0].icon + ".png";
        iconUr25 = url + forecast.list[5].weather[0].icon + ".png";

        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
        forecastDate12 = forecast.list[4].dt_txt.substring(8, 10) + '/' + forecast.list[4].dt_txt.substring(5, 7) + '/' + forecast.list[4].dt_txt.substring(0, 4) + ' ' +  forecast.list[4].dt_txt.substring(11, 13);
        forecastDate15 = forecast.list[5].dt_txt.substring(8, 10) + '/' + forecast.list[5].dt_txt.substring(5, 7) + '/' + forecast.list[5].dt_txt.substring(0, 4) + ' ' +  forecast.list[5].dt_txt.substring(11, 13);
    }

return (
 <div className="">
 {
   showData === true ? (

  <div className="">
   <div className="colores ">

    <div className=" g-0 completa">
     <div className=" imagen uno">
      <h3 className="card-title">{weather.name}</h3>
      <p className="card-date">{date}</p>
      <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
      <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
      </div>
      <div className='tiempo'>
        <div className=" dias">
        <div className="col cuadro">
         <p>{forecastDate3}h</p>
         <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
         <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
        </div>
        <div className="col cuadro">
         <p>{forecastDate6}h</p>
         <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
         <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
        </div>
        <div className="col cuadro">
         <p>{forecastDate9}h</p>
         <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
         <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
        </div>
        <div className="col cuadro">
         <p>{forecastDate12}h</p>
         <p className="description"><img src={iconUr22} alt="icon"/>{forecast.list[4].weather[0].description}</p>
         <p className="temp">{(forecast.list[4].main.temp - 273.15).toFixed(1)}ºC</p>
        </div>
        <div className="col cuadro">
         <p>{forecastDate15}h</p>
         <p className="description"><img src={iconUr25} alt="icon"/>{forecast.list[5].weather[0].description}</p>
         <p className="temp">{(forecast.list[5].main.temp - 273.15).toFixed(1)}ºC</p>
        </div>
       </div>


       <div className="">
        <div className="estadisticas">
         <h5 className="card-text cuadro dos">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-thermometer-sun" viewBox="0 0 16 16">
  <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z"/>
  <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z"/>
         </svg></h5>
         <h5 className="card-text cuadro dos">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-thermometer-snow" viewBox="0 0 16 16">
  <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5z"/>
  <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z"/>
         </svg><i class="bi bi-thermometer-snow"></i></h5>
         <h5 className="card-text cuadro dos">sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-thermometer-half" viewBox="0 0 16 16">
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
         </svg></h5>
         <h5 className="card-text cuadro dos wi wi-humidity">Humedad: {weather.main.humidity}%</h5>
         <h5 className="card-text cuadro dos wi wi-strong-wind">Velocidad del viento: {weather.wind.speed}m/s</h5>
        </div>
       
      </div>
     </div>

     </div>
    </div>

  </div>
  ):(
  <h2 className="text-light">Hola bienbenido porfavor igrese la locasion que quiera consutar el clima el dia de hoy</h2>
  )
 }
 </div>

 );
}

export default Card;