// Получить IP
fetch("https://api64.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip").textContent = "IP: " + data.ip;
  })
  .catch(err => {
    document.getElementById("ip").textContent = "IP: error";
  });

// Unixtime обновляется каждую секунду
function updateUnixTime() {
  const now = Math.floor(Date.now() / 1000);
  document.getElementById("unixtime").textContent = "Unixtime: " + now;
}
setInterval(updateUnixTime, 1000);
updateUnixTime();

// Генерация QR
function generateQR() {
  const input = document.getElementById("qr-input").value;
  const url = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(input);
  document.getElementById("qr-image").src = url;
}
