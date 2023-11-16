async function func(){
    let txt = document.getElementById("inp").value
    async function func(){
        response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txt}&appid=b60e7c438b3b7f394bee6670a638367c&units=metric`)
        result = await response.json()
        return result
    }

    result = await func()
    name = result['name']
    temp = result["main"]['temp']
    humid = result["main"]['humidity']
    wind = result['wind']['speed']
    weather = result['weather'][0]['main']
    p2 = document.getElementsByClassName('para2')[0].innerHTML = name
    p1 = document.getElementsByClassName('para1')[0].innerHTML = `${temp}°C`
    p3 = document.getElementsByClassName('wind')[0].innerHTML = `${wind} km/h`
    p4 = document.getElementsByClassName('humidity')[0].innerHTML = `${humid}%`
    if (weather === "Clear"){
        document.getElementsByClassName('img1')[0].src = 'images_stack/sun.webp'
    }
    else if (weather === "Rain"){
        document.getElementsByClassName('img1')[0].src = 'images_stack/cloud.rain.png'
    }
    else if (weather === "Haze"){
        document.getElementsByClassName('img1')[0].src = 'images_stack/mist.png'
    }
    else if (weather === "Clouds"){
        document.getElementsByClassName('img1')[0].src = "images_stack/clouds.png"
    }
    console.log(weather)
}


