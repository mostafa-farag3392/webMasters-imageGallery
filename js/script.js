    document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const loadMoreBtn = document.getElementById("loadMore");
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightboxContent");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.querySelector(".close");

    const images = [
        { title: "Image 1", description: "Description for image 1", src: "./images/image 1.jpg" },
        { title: "Image 2", description: "Description for image 2", src: "./images/image 2.jpg" },
        { title: "Image 3", description: "Description for image 3", src: "./images/image 3.jpg" },
        { title: "Image 4", description: "Description for image 4", src: "./images/image 4.jpg" },
        { title: "Image 5", description: "Description for image 5", src: "./images/image 5.jpg" },
        { title: "Image 6", description: "Description for image 6", src: "./images/image 6.jpg" },
        { title: "Image 7", description: "Description for image 7", src: "./images/image 7.jpg" },
        { title: "Image 8", description: "Description for image 8", src: "./images/image 8.jpg" },
        { title: "Image 9", description: "Description for image 9", src: "./images/image 9.jpg" },
        { title: "Image 10", description: "Description for image 10", src: "./images/image 10.jpg" },
        { title: "Image 11", description: "Description for image 11", src: "./images/image 11.jpg" },
        { title: "Image 12", description: "Description for image 12", src: "./images/image 12.jpg" },
        { title: "Image 13", description: "Description for image 13", src: "./images/image 13.jpg" },
        { title: "Image 14", description: "Description for image 14", src: "./images/image 14.jpg" },
        { title: "Image 15", description: "Description for image 15", src: "./images/image 15.jpg" },
        // Add more images as needed
    ];

    let currentIndex = 0;
    const itemsPerPage = 3;

    function loadImages() {
        const fragment = document.createDocumentFragment();

        for (let i = currentIndex; i < currentIndex + itemsPerPage && i < images.length; i++) {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = images[i].src;
            img.alt = images[i].title;

            const cardContent = document.createElement("div");
            cardContent.classList.add("card-content");

            const h3 = document.createElement("h3");
            h3.textContent = images[i].title;

            const p = document.createElement("p");
            p.textContent = images[i].description;

            cardContent.appendChild(h3);
            cardContent.appendChild(p);
            card.appendChild(img);
            card.appendChild(cardContent);

            fragment.appendChild(card);

            card.addEventListener("click", () => openLightbox(images[i]));
        }

        gallery.appendChild(fragment);
        currentIndex += itemsPerPage;

        if (currentIndex >= images.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    function openLightbox(image) {
        lightbox.style.display = "block";
        lightboxContent.src = image.src;
        lightboxCaption.textContent = `${image.title} - ${image.description}`;
    }

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    loadMoreBtn.addEventListener("click", loadImages);

    // Initial load
    loadImages();
});