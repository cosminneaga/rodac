let carouselInner = document.getElementById('carouselContainer');

let data = [{
        "backgroundURL": "transit.jpg",
        "overlayer": true,
        "title": "About Us",
        "description": `Here at Rodac Logistics Ltd. we offer a friendly & efficient service, giving exceptional value for money. We will deliver any size of goods from a letter to full pallets and more, to almost anywhere in UK. Here at Rodac Logistics Ltd. we offer a friendly & efficient service, giving exceptional value for money.`
    },
    {
        "backgroundURL": "city.jpg",
        "overlayer": true,
        "title": "Services",
        "description": "If you need something delivered, picked up or both on the sameday then call us today. We are here when you need us most. Our sameday can typically pick up within the hour and your delivery can be on its way."
    },
    {
        "backgroundURL": "dhl.jpg",
        "overlayer": false
    }
];

for (var i = 0; i < data.length; i++) {

    let html =
        `
        <div class="carousel-caption">
            <h1>${data[i].title}</h1>
            <div class="capt">
                <p>${data[i].description}</p>
            </div>
        </div>
    `;

    let outerDiv = document.createElement('div');
    if (i == 0) {
        outerDiv.className = 'carousel-item active';
    } else {
        outerDiv.className = 'carousel-item';
    }
    outerDiv.style.backgroundImage = `url('images/carousel-images/${data[i].backgroundURL}')`;

    if (data[i].overlayer == true) {
        outerDiv.innerHTML = html;
    }

    carouselInner.appendChild(outerDiv);
}