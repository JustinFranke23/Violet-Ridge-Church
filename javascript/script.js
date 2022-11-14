/* Contact Us Form Validation */

const validateForm = () => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const message = document.getElementById('message')

    if (name.value && email.value && phone.value && message.value) {
        if (email.value.includes('@')) {
            alert(`Thanks for contacting us ${name.value}! , we will respond to your mnessage ASAP`)
        } else {
            alert(`Please make sure your email is valid and includes an @ symbol`)
        }
    } else {
        alert(`Please make sure you have filled out all 4 fields`)

        
    }
}

//Map API

var map = L.map('map').setView([38.79462555473118, -84.6169389355239], 19);
L.tileLayer('https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=53c4f0644bmsh7a490ca7886f56ep180f41jsnac2c5504b031', {
attribution: 'Tiles &copy: <a href="https://www.maptilesapi.com/">MapTiles API</a>, Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 19
}).addTo(map);