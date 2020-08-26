window.addEventListener('load', () => {
  let long
  let lat
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude
      lat = position.coords.latitude
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3de56cafefd2787dd31581eaa1f6de25`
      fetch(api)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
    })

  
  }
  // else{
  //   h1.textContent = "Please let Google know your location!"
  // }
})

// working api : http://api.openweathermap.org/data/2.5/weather?lat=50&lon=-0.6793005&appid=3de56cafefd2787dd31581eaa1f6de25