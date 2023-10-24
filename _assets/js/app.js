var url = new URL(window.location.href);
var to = url.searchParams.get("to");
var count = url.searchParams.get("count");
if (to==null || to=="") {
    document.getElementById('guest').innerHTML = "Guest";
} else {
    document.getElementById('guest').innerHTML = to;
}

if (count==null || count=="") {
    document.getElementById('guestCount').innerHTML = "";
} else {
    document.getElementById('guestCount').innerHTML = `Undangan hanya berlaku untuk ${count} orang`;
}

const btnOpen = document.querySelector('#btnOpen');
const invitationCover = document.querySelector('#invitationCover');
const weddingBody = document.querySelector('#wedding-body');
const btn_play = document.querySelector('#btn-play');
const audio = document.querySelector('#audio');

document.addEventListener('DOMContentLoaded', function() {
  getData();



  var animation = bodymovin.loadAnimation({
    container: document.getElementById('icon-container'),
    path: 'https://lottie.host/e6803328-1732-4cbe-8da7-4747dbf31263/zsAAl5mYfa.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
  });

  var animation2 = bodymovin.loadAnimation ({
    container: document.getElementById('ornament1'),
    path: 'https://lottie.host/bbd93f95-6e18-4c06-86ad-2eb01dcb2a7f/xMYhnAhWdW.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation2",
  });

  var animation3 = bodymovin.loadAnimation ({
    container: document.getElementById('ornament2'),
    path: 'https://lottie.host/bbd93f95-6e18-4c06-86ad-2eb01dcb2a7f/xMYhnAhWdW.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation2",
  });
});

btnOpen.addEventListener('click', function() {
  invitationCover.classList.add('-top-[105vh]')
  weddingBody.classList.remove('hidden');
  audio.play();
});

btn_play.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    btn_play.innerHTML = '<img src="data:image/png;base64,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">';
  } else {
    btn_play.innerHTML = '<img src="data:image/png;base64,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">';
    audio.pause();
  }
});

// Mengatur waktu akhir perhitungan mundur
let countDownDate = new Date("December 03, 2023 08:00:00").getTime();

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
      center: { lat: -6.9162005, lng: 107.6106178 },
  });
  const image =
      "_assets/img/maps-marker.svg";
  const beachMarker = new google.maps.Marker({
      position: { lat: -6.9162005, lng: 107.6106178 },
      map,
      icon: image,
  });
}

let formMessage = document.getElementById('formMessage');
const btnMessage = document.getElementById('btnMessage');
const sendLoading = document.getElementById('send-loading');
const messageList = document.getElementById('messages');

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
    ].join(':')
  );
}

async function getData(){
  const response = await fetch('https://script.google.com/macros/s/AKfycbzanfx7b3rMDB1gd91egaMtr8fVTqchoGQsz684ANugqamuXfY-bEHgd1kLYyb4KUyB/exec?sheetName=TessaManshur');
  const data = await response.json();
  length = data.length;
  let content ='';

  for(i=0;i<length;i++)
  {
      sort = length - (i+1);
      const nama = data[sort].nama;
      const pesan = data[sort].pesan;
      const date = data[sort].date;

      const dateStr = formatDate(new Date(date))
      
      content +=
      `<div class="flex flex-col p-4 rounded-lg border border-black/75 bg-white/50">
        <div class="flex justify-between">
          <h5 class="text-sm font-semibold mb-2">${ nama }</h5>
          <h5 class="text-sm font-semibold mb-2">${ dateStr }</h5>
        </div
        <p class="text-xs">${ pesan }</p>
      </div>`
  }

  messageList.innerHTML = content;
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  

  console.log(response.response);
  return response;
}

const inputNama = document.getElementById('nama');
const inputPesan = document.getElementById('pesan');

formMessage.addEventListener('submit', function (e) {
  e.preventDefault();
  
  let date = new Date();
  let nama = inputNama.value;
  let pesan = inputPesan.value;
  
  let body = {
    "sheetName": "TessaManshur",
    date,
    nama,
    pesan,
  };
  
  btnMessage.setAttribute('disabled', 'true');
  sendLoading.classList.remove('hidden')
  sendLoading.classList.add('flex')
  
  postData('https://script.google.com/macros/s/AKfycbzanfx7b3rMDB1gd91egaMtr8fVTqchoGQsz684ANugqamuXfY-bEHgd1kLYyb4KUyB/exec', body).then((data) => {
    inputNama.value = '';
    inputPesan.value = '';
    btnMessage.removeAttribute('disabled');
    sendLoading.classList.remove('flex')
    sendLoading.classList.add('hidden')

    getData();
  }).catch(error => console.error('Error:', error));
});

const popup = document.getElementById("show-image");

function toggleModalImage(url) {
  if (popup.classList.contains('flex')) {
    popup.classList.remove('flex');
    popup.classList.add('hidden');
  } else if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
    popup.classList.add('flex');
  }

  if (url !== undefined) {
    document.getElementById('image-pop').innerHTML = `<img
    alt="gallery"
    class="block h-full w-full rounded-lg object-cover object-center"
    src=${url} />`
  }
}