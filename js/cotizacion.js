const main = async () => {
    const fetchURL = async (url) => {
      const res = await fetch(`https://www.dolarsi.com/api/api.php?type=${url}`)
      return res.json()
    }

    const cotizacionesDolar = await fetchURL("dolar");
    console.log(cotizacionesDolar)
    const crearHtmlCotizacionDolar = () => {
      return cotizacionesDolar.map(cot => {
        return `
            <div class="cotizacion" style="background-color: #F6F1EE;">
                <h5 class="location" id="location">${cot.casa.nombre}</h5>
                <div class="forecast-details-container">
                    <p>Compra: $${cot.casa.compra}</p>
                    <p>Venta: $${cot.casa.venta}</p>
                </div>
            </div>
        `
      })
    }
    const cotizacionMainDolar = document.getElementById('cotizacion-main-dolar')
    crearHtmlCotizacionDolar().forEach(cot => cotizacionMainDolar.appendChild(createElementFromHTML(cot)))
  
    const cotizacionesOtros = await fetchURL("cotizador");
    console.log(cotizacionesOtros)
    const crearHtmlCotizacionOtros = () => {
      return cotizacionesOtros.map(cot => {
        return `
            <div class="cotizacion" style="background-color: #F6F1EE;">
                <h5 class="location" id="location">${cot.casa.nombre}</h5>
                <div class="forecast-details-container">
                    <p>Compra: $${cot.casa.compra}</p>
                    <p>Venta: $${cot.casa.venta}</p>
                </div>
            </div>
        `
      })
    }
    const cotizacionMainOtros = document.getElementById('cotizacion-main-otros')
    crearHtmlCotizacionOtros().forEach(cot => cotizacionMainOtros.appendChild(createElementFromHTML(cot)))

}

document.addEventListener("DOMContentLoaded", main)