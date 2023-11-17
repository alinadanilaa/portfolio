function formMessage() {
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var msg = document.getElementById('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if (Name.value === '' || email.value === '' || msg.value === '' || subject.value === '') {
        danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
            subject.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}