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
};
//Calendar

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay= new Date(date.getFullYear(),date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";


    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-month">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
     if ( i === new Date().getDate() && date.getMonth() === new Date().getMonth())
    {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
    
   }

    for (let j = 1;j <= nextDays;j++) {
        days += `<div class="next-month">${j}</div>`;
        monthDays.innerHTML = days;
   }
};



document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

/* Word counter for prayer */

function countWords(self) {
    var spaces = self.value.match(/\S+/g);
    var words = 0; if (spaces) words = spaces.length
 
    document.getElementById("words-counter").innerHTML = words + " words";
}