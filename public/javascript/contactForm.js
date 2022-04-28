let FirstName = document.getElementById('contact-fname');
let LastName = document.getElementById('contact-lname');
let Email = document.getElementById('contact-email');
let Subject = document.getElementById('contact-subject');
let Message = document.getElementById('contact-message');
let contact_submit_button = document.getElementById('contact-submit');


contact_submit_button.addEventListener('click', function() {

    let http = new XMLHttpRequest();

    let contact_data = {
        FirstName: FirstName.value,
        LastName: LastName.value,
        Email: Email.value,
        Subject: Subject.value,
        Message: Message.value
    }

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(this.responseText);

            if (response.data.error) {
                let containerErrorRedirect = response.data.error.details[0].context.key;

                if (containerErrorRedirect === 'FirstName') {
                    FirstName.classList.add('is-invalid');
                } else {
                    FirstName.classList.remove('is-invalid');
                }

                if (containerErrorRedirect === 'LastName') {
                    LastName.classList.add('is-invalid');
                } else {
                    LastName.classList.remove('is-invalid');
                }

                if (containerErrorRedirect === 'Email') {
                    Email.classList.add('is-invalid');
                } else {
                    Email.classList.remove('is-invalid');
                }

                if (containerErrorRedirect === 'Subject') {
                    Subject.classList.add('is-invalid');
                } else {
                    Subject.classList.remove('is-invalid');
                }

                if (containerErrorRedirect === 'Message') {
                    Message.classList.add('is-invalid');
                } else {
                    Message.classList.remove('is-invalid');
                }
            } else {
                alert('Your Query has been submitted. Please allow 48 hours to process your enquery.');
                FirstName.value = '';
                LastName.value = '';
                Email.value = '';
                Subject.value = '';
                Message.value = '';

                if (FirstName.classList.contains('is-invalid')) {
                    FirstName.classList.remove('is-invalid');
                }

                if (LastName.classList.contains('is-invalid')) {
                    LastName.classList.remove('is-invalid');
                }

                if (Email.classList.contains('is-invalid')) {
                    Email.classList.remove('is-invalid');
                }

                if (Subject.classList.contains('is-invalid')) {
                    Subject.classList.remove('is-invalid');
                }

                if (Message.classList.contains('is-invalid')) {
                    Message.classList.remove('is-invalid');
                }
            }

        }

    }

    http.open('POST', '/contactFormData', true);
    http.setRequestHeader("Content-type", "application/json");
    http.send(JSON.stringify(contact_data));
});