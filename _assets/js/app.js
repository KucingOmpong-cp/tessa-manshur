// Mengatur waktu akhir perhitungan mundur
let countDownDate = new Date("February 12, 2023 08:00:00").getTime();

// Memperbarui hitungan mundur setiap 1 detik
let x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  let now = new Date().getTime();
      
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  let distance = countDownDate - now;
      
  // Perhitungan waktu untuk hari, jam, menit dan detik
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
  // Keluarkan hasil dalam elemen dengan id = "demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
}, 1000);

// init Map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: -6.864206, lng: 107.479917 },
  });
  const image =
      "_assets/img/maps-marker.svg";
  const beachMarker = new google.maps.Marker({
      position: { lat: -6.864206, lng: 107.479917 },
      map,
      icon: image,
  });
}