const scriptURL = 'https://script.google.com/macros/s/AKfycbyg4duQRjxsI8MjFm75guTSgYMIqfGizm8TYBBDb_ZxAociWxuJZkSOchPlhsmjsBSXqw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    document.getElementById("myForm").reset();
})
