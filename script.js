$(function () {
  $("#button-addon2").click(function (e) {
    e.preventDefault();
    if ($(".input-keyword").val().length == 0) {
      return swal("", "Masukkan nama kota atau negara", "warning");
    }
    var tempat = $(".input-keyword").val().toLowerCase();
    $.ajax({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather",
      data: {
        q: tempat,
        appid: "c5b52ec878433bce6ef6d57ad16e43cc",
        units: "metric",
      },
      success: function (response) {
        cekWeather(response.main.temp);
        $(".result").html(`<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
            <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
            <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
            <h5>Wind Speed : ${response.wind.speed} m/s</h5>
            <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
            <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>`);
        $(".input-keyword").val(null);
      },
    });
  });
});

function cekWeather(temp) {
  if (temp >= 0.0) {
    console.log(temp);
    const cls = ["dingin", "sejuk", "cerah", "kering", "panas"];
    var doc = document.body;
    doc.classList.add("dinginbet");
    doc.classList.remove(...cls);
  }
  if (temp >= 10.0) {
    console.log(temp);
    const cls = ["dinginbet", "sejuk", "cerah", "kering", "panas"];
    var doc = document.body;
    doc.classList.add("dingin");
    doc.classList.remove(...cls);
  }
  if (temp >= 20.0) {
    const cls = ["dinginbet", "dingin", "cerah", "kering", "panas"];
    console.log(temp);
    var doc = document.body;
    doc.classList.add("sejuk");
    doc.classList.remove(...cls);
  }
  if (temp >= 30.0) {
    const cls = ["dinginbet", "dingin", "sejuk", "kering", "panas"];
    console.log(temp);
    var doc = document.body;
    doc.classList.add("cerah");
    doc.classList.remove(...cls);
  }
  if (temp >= 40.0) {
    const cls = ["dinginbet", "dingin", "sejuk", "cerah", "panas"];
    console.log(temp);
    var doc = document.body;
    doc.classList.add("kering");
    doc.classList.remove(...cls);
  }
  if (temp >= 50.0) {
    const cls = ["dinginbet", "dingin", "sejuk", "cerah", "kering"];
    console.log(temp);
    var doc = document.body;
    doc.classList.add("panas");
    doc.classList.remove(...cls);
  }
}
