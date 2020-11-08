// Selectors
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');



// Event Listeners
burger.addEventListener('click', showNavBar);


// Function
function showNavBar(event) {
    navLinks.classList.toggle('nav-active');

    let len = navLinks.childElementCount;
    for(let i = 0; i < len; i++) {
        // navLinks.children[i].classList.toggle('nav-link-anime');
    }
    navLinks.children[0].classList.toggle('nav-link1-anime');
    navLinks.children[1].classList.toggle('nav-link2-anime');
    navLinks.children[2].classList.toggle('nav-link3-anime');
    navLinks.children[3].classList.toggle('nav-link4-anime');
    


    burger.children[0].classList.toggle('line1-anime');
    burger.children[1].classList.toggle('line2-anime');
    burger.children[2].classList.toggle('line3-anime');
}



// For image slider
document.getElementById('carousel-arrow-next').addEventListener('click',carouselSwipe,false);
document.getElementById('carousel-arrow-prev').addEventListener('click',carouselSwipe,false);

/**
 * Switch header carousel to next image (swipe right)
 */
function carouselSwipe() {
	
    // Récupère les numéros de l'ancienne et la nouvelle image
    var currentImg = document.getElementsByClassName('carousel-img-displayed')[0].id.substring(9);
	var newImg = parseInt(currentImg);
    
    // Gestion du début et de la fin de la liste d'images
	if (this.id == 'carousel-arrow-next') {
        newImg++;
        if (newImg >= document.getElementsByClassName('carousel-img').length) {
            newImg = 0;
        }
	} else if (this.id == 'carousel-arrow-prev') {
        newImg--;
        if (newImg<0) {
            newImg = document.getElementsByClassName('carousel-img').length-1;
        }
    }
    
	// Disparition progressive de l'ancienne image
    document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-hidden';
	
    // Apparition progressive de la nouvelle image
    var displayedCarousel = document.getElementById('carousel-'+newImg);
	displayedCarousel.className = 'carousel-img carousel-img-hidden';
	setTimeout(function() {
		displayedCarousel.className = 'carousel-img carousel-img-displayed';
	},20);
    
    // Disparition totale de l'ancienne image
	setTimeout(function() {
		document.getElementById('carousel-'+currentImg).className = 'carousel-img carousel-img-noDisplay';
	},520);
    
}




