const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url) //jo bhi city ka name niche ke function se aaya h us city ka data fetch karega.
    //await isliye lagaye kyuki hamaara function async hai.
    //it means niche ke line execute nahi hogi until jo fetch ne promise kiya hai means jo request kiya hai api se vo nahi milta. jaise hi data milega 
    //niche ke line execute honge.
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}


const showWeather = (data) => {

    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
          <h2>${data.main.temp}°C</h2>
          <h4>${data.weather[0].main}</h4>
        </div>`
}



form.addEventListener("submit", function (event) {

    getWeather(search.value) //its saying tha jo bhi search bar mai likhenge and enter karenge vo data uth kar aayga i.e city ke name jo search karenge vo aaayga aur upar ke
    //function mai jyga because as a parameter pass kar rhe hai apn.
    event.preventDefault(); //form mai click karne se vo load hota hai , so ye usko hone se rokhega.

})

