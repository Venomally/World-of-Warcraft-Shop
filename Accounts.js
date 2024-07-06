document.addEventListener('DOMContentLoaded', () => {
    const slidesData = [
        [
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 1', description: 'Description 1' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 2', description: 'Description 2' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 3', description: 'Description 3' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 4', description: 'Description 4' }
        ],
        [
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 5', description: 'Description 5' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 6', description: 'Description 6' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 7', description: 'Description 7' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 8', description: 'Description 8' }
        ],
        [
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 9', description: 'Description 9' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 10', description: 'Description 10' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 11', description: 'Description 11' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 12', description: 'Description 12' }
        ],
        [
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 9', description: 'Description 9' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 10', description: 'Description 10' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 11', description: 'Description 11' },
            { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BgyePd8wY8d_QrkrqWG3mldeIfEb45OAiQ&s', title: 'Title 12', description: 'Description 12' }
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
            titleElement.classList.add('slide-title');

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = item.description;
            descriptionElement.classList.add('slide-description');

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
        console.log('clicked');
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
        console.log('clicked');
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});
