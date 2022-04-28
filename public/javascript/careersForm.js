let careers_FullName = document.getElementById('careers-fullname');
let careers_Email = document.getElementById('careers-email');
let careers_Phone = document.getElementById('careers-phone');
let careers_CV = document.getElementById('customFile');
let careers_submit_button = document.getElementById('careers-submit-button');


careers_submit_button.addEventListener('click', function() {

    let http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let response = JSON.parse(this.responseText);

            if (response.success === true) {
                if (response.data.error) {
                    let containerErrorRedirect = response.data.error.details[0].context.key;

                    if (containerErrorRedirect === 'fullName') {
                        careers_FullName.classList.add('is-invalid');
                    } else {
                        careers_FullName.classList.remove('is-invalid');
                    }

                    if (containerErrorRedirect === 'email') {
                        careers_Email.classList.add('is-invalid');
                    } else {
                        careers_Email.classList.remove('is-invalid');
                    }

                    if (containerErrorRedirect === 'phone') {
                        careers_Phone.classList.add('is-invalid');
                    } else {
                        careers_Phone.classList.remove('is-invalid');
                    }

                } else {
                    if (!alert('Your application has been submitted. Please allow 48 hours to process your application.')) { window.location.reload(); }
                }
            } else {

                if (response.formatError) {
                    confirm(`Please upload a file in PDF format.\nThank you.`);
                    return false;
                }
            }

        }

    }

    let reader = new FileReader();
    let file = careers_CV.files[0];

    if (file === undefined) {
        careers_CV.classList.add('is-invalid');
        return false;
    } else {
        if (file.size / 1024 / 1024 > 10) {
            confirm(`File is exceeding the maximum allowed size of 10.00 mb\nUploaded file size: ${file.size / 1024 / 1024} mb`);
            return false;
        }
        if (careers_CV.classList.contains('is-invalid')) {
            careers_CV.classList.remove('is-invalid');
        }
    }

    reader.onload = function() {

        let data = reader.result;
        let base64 = data.replace(/^[^,]*,/, '');
        let careers_data = {
            fullName: careers_FullName.value,
            email: careers_Email.value,
            phone: careers_Phone.value,
            cv: {
                data: base64,
                name: file.name
            }
        }

        http.open('POST', '/careersFormData', true);
        http.setRequestHeader("Content-type", "application/json");
        http.send(JSON.stringify(careers_data));

    }

    reader.readAsDataURL(file);


});