
const main = async () => {

  const fetchURL = async (url) => {
    const res = await fetch(`https://weatherservices.herokuapp.com/api/${url}`)
    return res.json()
  }

  const { locations: [sanMiguelLocation] } = await fetchURL("locations")
  const wheaterDataSanMiguel = await fetchURL(`weather/${sanMiguelLocation.state_id}`)
  const { item: { weather } } = wheaterDataSanMiguel
  const { forecast: { forecast: { 0: saturday, 1: sunday, 2: monday, 3: tuesday } } } = wheaterDataSanMiguel.item
  const forecast = [saturday, sunday, monday, tuesday]

  const extForecast = () => {
    return forecast.map((day, i) => {
      return `
        <div class="forecast-extend-item">
        
          <div class="forecast-inner-item">
          <span class="forecast-detail-item-date"><p id="date-${i}">${day.date}</p></span>
            <span class="forecast-detail-item">Temp min:<p id="min-temp-${i}">${day.temp_min ? `${day.temp_min}°C` : " ? °C "}</p></span>
            <span class="forecast-detail-item">Temp max:<p id="max-temp-${i}">${day.temp_max ? `${day.temp_max}°C` : " ? °C "}</p></span>
          </div>
        </div>
      `
    })
  }
  const forecastContainer = document.getElementById('extend-forecast-main-container')
  extForecast().forEach(forecast => forecastContainer.appendChild(createElementFromHTML(forecast)))

  const temp = document.getElementById('tempeture')
  const minTemp = document.getElementById('min-tempeture')
  const humidity = document.getElementById('humidity')
  const pressure = document.getElementById('pressure')
  const visibility = document.getElementById('visibility')
  const windSpeed = document.getElementById('wind_speed')
  const windDeg = document.getElementById('wind_deg')
  const description = document.getElementById('description')
  const image = document.getElementById('image')

  const location = document.getElementById('location')
  location.innerHTML = `${sanMiguelLocation.name}, ${sanMiguelLocation.province}`

  temp.innerHTML = `${weather.temp}°C`;
  minTemp.innerHTML = `${weather.tempDesc}`;
  humidity.innerHTML = `${weather.humidity}%`;
  pressure.innerHTML = `${weather.pressure}hPa`;
  visibility.innerHTML = `${weather.visibility}km`;
  windSpeed.innerHTML = `${weather.wind_speed}Km`;
  windDeg.innerHTML = `${weather.wing_deg}`;
  description.innerHTML = `${weather.description}`;
  image.src = './../img/sun.svg'

  const { alerts: alertsDayOne } = await fetchURL("alerts/byDay/1")
  const { alerts: alertsDayTwo } = await fetchURL("alerts/byDay/2")
  const { alerts: alertsDayThree } = await fetchURL("alerts/byDay/3")

  const alerts = [alertsDayOne, alertsDayTwo, alertsDayThree]
  const alertsContainer = document.getElementById('alerts-main-container')
  const btns = [];
  const infoClima = [];

  alerts.forEach((e, i) => { //new
    let infoAlerta = createElementFromHTML(`<div id="alerts/byDay/${i}" class="contenedor"> <div id="info-day-${i}" class="info-day"></div></div>`);

    alertsContainer.appendChild(infoAlerta);
    let boton = createElementFromHTML(`<button class="bntClima " id="btnDay${i}" type="submit">Día ${i + 1}</button>"`)
    btns.push(boton);
    infoClima.push(infoAlerta);
    document.getElementById(`alerts/byDay/${i}`).append(boton);
  })


  btns.forEach((e, i) => { //new
    e.addEventListener("click", () => {

      alerts[i].forEach((c) => {
        document.getElementById(`info-day-${i}`).innerHTML += `
          <p><span> Fecha: </span>${c.date}</p>
          <p><span> Hora: </span>${c.hour}</p>
          <p><span> Titulo: </span> ${c.title}</p>
          <p><span> ${c.status == null ? '' : "Estado: "} </span>${c.status == null ? '' : c.status}</p>
          <p><span> ${c.description == null ? '' : "Descripción:"} </span>${c.description == null ? '' : c.description}</p>
          <br> <br> <br>
          `;
      })
      infoClima.forEach((e, i) => {
        if (document.getElementById(`info-day-${i}`).style.display === "block") {
          document.getElementById(`info-day-${i}`).style.display = "none";
          document.getElementById(`info-day-${i}`).innerHTML = "";
        } else {
          document.getElementById(`info-day-${i}`).style.display = "block";
        }
      })
    })

  })

}


document.addEventListener("DOMContentLoaded", main)