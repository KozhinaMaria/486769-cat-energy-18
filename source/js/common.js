svg4everybody();

function openPopup(event) {
  event.preventDefault();
  alert("Модальное окно оформление заказа");
}

function getProducts(event) {
  event.preventDefault();
  alert("Идет загрузка новых товаров");
}

function initMap() {
  var mapElement = document.getElementById('map');
  var location = {
    lat: 59.938776,
    lng: 30.323052
  };
  var map = new google.maps.Map(
    mapElement, {
      zoom: 17,
      center: location,
    });

  var icon = {
    url: "./img/map-pin.png",
    scaledSize: new google.maps.Size(55, 53),
    anchor: new google.maps.Point(40, 40)
  };

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: icon,
    title: "marker"
  });
}

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
