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