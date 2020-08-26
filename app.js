window.addEventListener('load', () => {
  let long
  let lat
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureDegree = document.querySelector('.temperature-degree')
  let locationTimezone = document.querySelector('.location-timezone')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude
      lat = position.coords.latitude
      // const proxy = 'https://cors-anywhere.herokuapp.com/'
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3de56cafefd2787dd31581eaa1f6de25`
      fetch(api)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const {temp} = data.main
        const feels_like = data.weather[0].description
        locationTimezone.textContent = data.name
        let tempinC = Math.floor(temp - 273.15)
        temperatureDegree.textContent = tempinC
        temperatureDescription.textContent = feels_like

      })
    })

  
  }
  // else{
  //   h1.textContent = "Please let Google know your location!"
  // }
})

// working api : http://api.openweathermap.org/data/2.5/weather?lat=50&lon=-0.6793005&appid=3de56cafefd2787dd31581eaa1f6de25