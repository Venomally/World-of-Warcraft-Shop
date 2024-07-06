document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
        [
            { image: 'image1.jpg', title: 'Title 1', description: 'Description 1' },
            { image: 'image2.jpg', title: 'Title 2', description: 'Description 2' },
            { image: 'image3.jpg', title: 'Title 3', description: 'Description 3' },
            { image: 'image4.jpg', title: 'Title 4', description: 'Description 4' }
        ],
        [
            { image: 'image5.jpg', title: 'Title 5', description: 'Description 5' },
            { image: 'image6.jpg', title: 'Title 6', description: 'Description 6' },
            { image: 'image7.jpg', title: 'Title 7', description: 'Description 7' },
            { image: 'image8.jpg', title: 'Title 8', description: 'Description 8' }
        ],
        [
            { image: 'image9.jpg', title: 'Title 9', description: 'Description 9' },
            { image: 'image10.jpg', title: 'Title 10', description: 'Description 10' },
            { image: 'image11.jpg', title: 'Title 11', description: 'Description 11' },
            { image: 'image12.jpg', title: 'Title 12', description: 'Description 12' }
        ]
    ];

    const slidesContainer = document.querySelector('.slides');
    const navigationContainer = document.querySelector('.navigation');
    let currentIndex = 0;

    slidesData.forEach((slideGroup, slideIndex) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        if (slideIndex === 0) slideElement.classList.add('active');

        slideGroup.forEach(item => {
            const slideItem = document.createElement('div');
            slideItem.classList.add('slide-item');

            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.alt = item.title;

            const titleElement = document.createElement('h3');
            titleElement.textContent = item.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;

            slideItem.appendChild(imgElement);
            slideItem.appendChild(titleElement);
            slideItem.appendChild(descriptionElement);
            slideElement.appendChild(slideItem);
        });

        slidesContainer.appendChild(slideElement);

        const dotElement = document.createElement('span');
        dotElement.classList.add('dot');
        if (slideIndex === 0) dotElement.classList.add('active');
        navigationContainer.appendChild(dotElement);
    });

    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        if (index >= slidesData.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slidesData.length - 1;
        } else {
            currentIndex = index;
        }

        const allSlides = document.querySelectorAll('.slide');
        allSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === currentIndex);
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});
