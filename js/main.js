"use strict";
/***********************************************
*  Main.js
*  Get Dom elements
***********************************************/
// get current page url
let url = window.location.href.split("/").reverse()[0];
// get screen width
let screenWidth = window.innerWidth;
// get .top-bar element
let topBar = document.querySelector(".top-bar");
// get .navbar element
let navBar = document.querySelector(".navbar");
// get header .carousel element
let headerCarousel = document.querySelector("header .carousel");
// get header .top-hr element
let headerTopHr = document.querySelector("header .top-hr");
// get About Us elements
let menuElement = document.querySelector(".menu");
let RightSideAboutUs = document.querySelector(".about-us .about-us-right");
let firstImageAboutUs = document.querySelector(".about-us .about-us-right :nth-child(1)");
let secondImageAboutUs = document.querySelector(".about-us .about-us-right :nth-child(2)");
let firstBorderAboutUs = document.querySelector(".about-us .about-us-right :nth-child(4)");
let secondBorderAboutUs = document.querySelector(".about-us .about-us-right :nth-child(3)");
// our story elements
let RightSideOurStory = document.querySelector(".our-story .our-story-right");
let firstOurStoryBorder = document.querySelector(".our-story .our-story-right :nth-child(2)");
let secondOurStoryBorder = document.querySelector(".our-story .our-story-right :nth-child(3)");
let OurStoryText = document.querySelector(".our-story .our-story-right :nth-child(4)");
let mainOurStoryBorder = document.querySelector(".our-story .our-story-right :nth-child(1)");

// Ingredients Elements
let Ingredients = document.querySelectorAll(".ingredients");
let IngredientsStyle1 = document.querySelectorAll(".ingredients .style-1");
let IngredientsStyle2 = document.querySelectorAll(".ingredients .style-2");
let IngredientsStyle3 = document.querySelectorAll(".ingredients .style-3");
let IngredientsStyle4 = document.querySelectorAll(".ingredients .style-4");
let IngredientsStyle1FirstImg = document.querySelectorAll(".ingredients .style-1 .first-img");
let IngredientsStyle1SecondImg = document.querySelectorAll(".ingredients .style-1 .second-img");
let IngredientsStyle1DottdSqure = document.querySelectorAll(".ingredients .style-1 .dottd-squre");
let IngredientsStyle2FirstImg = document.querySelectorAll(".ingredients .style-2 .first-img");
let IngredientsStyle2SecondImg = document.querySelectorAll(".ingredients .style-2 .second-img");
let IngredientsStyle2DottdSqure = document.querySelectorAll(".ingredients .style-2 .dottd-squre");
let IngredientsStyle3FirstImg = document.querySelectorAll(".ingredients .style-3 .first-img");
let IngredientsStyle3SecondImg = document.querySelectorAll(".ingredients .style-3 .second-img");
let IngredientsStyle3DottdSqure = document.querySelectorAll(".ingredients .style-3 .dottd-squre");
let IngredientsStyle4FirstImg = document.querySelectorAll(".ingredients .style-4 .first-img");
let IngredientsStyle4SecondImg = document.querySelectorAll(".ingredients .style-4 .second-img");
let IngredientsStyle4DottdSqure = document.querySelectorAll(".ingredients .style-4 .dottd-squre");


// get gallery elements
let galleryElement = document.getElementById("lightgallery");

function ManageAboutUs() {
    screenWidth = window.innerWidth;
    let firstImageWidth = firstImageAboutUs.offsetWidth * .6947;
    let firstImageHeight = firstImageAboutUs.offsetHeight * .6541;
    if (screenWidth > 991) {
        firstImageAboutUs.style.top = 0;
        firstImageAboutUs.style.right = 0;
        firstBorderAboutUs.style.top = -10 + "px";
        firstBorderAboutUs.style.right = -10 + "px";
        secondImageAboutUs.style.top = firstImageHeight + "px";
        secondImageAboutUs.style.right = firstImageWidth + "px";
        secondBorderAboutUs.style.bottom = "-" + (firstImageHeight + secondImageAboutUs.offsetHeight + 10) + "px";
        secondBorderAboutUs.style.right = (firstImageWidth + secondImageAboutUs.offsetWidth - secondBorderAboutUs.offsetWidth + 10) + "px";

    } else {
        let screenMiddle = (screenWidth - 100 - (firstImageWidth + secondImageAboutUs.offsetWidth)) / 2;
        firstImageAboutUs.style.top = 50 + "px";
        firstImageAboutUs.style.right = screenMiddle + "px";
        firstBorderAboutUs.style.top = 40 + "px";
        firstBorderAboutUs.style.right = screenMiddle - 10 + "px";
        secondImageAboutUs.style.top = 50 + firstImageHeight + "px";
        secondImageAboutUs.style.right = screenMiddle + firstImageWidth + "px";
        secondBorderAboutUs.style.top = (firstImageHeight + secondImageAboutUs.offsetHeight - secondBorderAboutUs.offsetHeight + 50 + 10) + "px";
        secondBorderAboutUs.style.right = (screenMiddle + firstImageWidth + secondImageAboutUs.offsetWidth - secondBorderAboutUs.offsetWidth + 10) + "px";
    }
}

function manageOurStory() {
    screenWidth = window.innerWidth;
    if (screenWidth > 991) {
        firstOurStoryBorder.style.top = (mainOurStoryBorder.offsetHeight - firstOurStoryBorder.offsetHeight + 20) + "px";
        firstOurStoryBorder.style.left = (mainOurStoryBorder.offsetLeft - 20) + "px";
        OurStoryText.style.left = (mainOurStoryBorder.offsetLeft) + "px";
    } else {
        mainOurStoryBorder.style.right = (screenWidth - 100 - mainOurStoryBorder.offsetWidth) / 2 + "px";
        firstOurStoryBorder.style.top = (mainOurStoryBorder.offsetHeight - firstOurStoryBorder.offsetHeight + 15) + "px";
        firstOurStoryBorder.style.left = (mainOurStoryBorder.offsetLeft - 15) + "px";
        secondOurStoryBorder.style.top = -15 + "px";
        secondOurStoryBorder.style.right = (screenWidth - 100 - mainOurStoryBorder.offsetWidth) / 2 - 15 + "px";
        OurStoryText.style.left = ((screenWidth - mainOurStoryBorder.offsetWidth) / 2) - 20 + "px";
    }

    OurStoryText.style.top = (- 35) + "px";

}

function manageIngredients() {
    screenWidth = window.innerWidth;

    IngredientsStyle1FirstImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * 1.6) + "px";
        element.style.top = 0;
        element.style.left = (element.offsetWidth + 10) + "px";
    });
    IngredientsStyle1SecondImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * 1.6) + "px";
        element.style.top = -40 + "px";
        element.style.left = 0;
        // change z-index
        element.style.zIndex = 2;
    });
    IngredientsStyle1DottdSqure.forEach((element, index) => {
        element.style.height = (element.offsetWidth) + "px";
        element.style.top = -100 + "px";
        element.style.left = -60 + "px";
        // change z-index
        element.style.zIndex = 1;
    });
    IngredientsStyle2FirstImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * .83) + "px";
        element.style.top = 122 + "px";
        element.style.left = 50 + "px";
        element.style.zIndex = 3;
    });
    IngredientsStyle2SecondImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * 1.6) + "px";
        element.style.top = -70 + "px";
        element.style.left = ((IngredientsStyle2FirstImg[index].offsetWidth + 50) * .64) + "px";
        element.style.zIndex = 2;
    });
    IngredientsStyle2DottdSqure.forEach((element, index) => {
        element.style.height = (element.offsetWidth) + "px";
        element.style.top = -150 + "px";
        element.style.left = IngredientsStyle2FirstImg[index].offsetWidth + "px";
        element.style.zIndex = 1;
    });
    IngredientsStyle3FirstImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * .83) + "px";
        element.style.top = 122 + "px";
        element.style.right = 50 + "px";
        element.style.zIndex = 3;
    });
    IngredientsStyle3SecondImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * 1.6) + "px";
        element.style.top = -70 + "px";
        element.style.right = ((IngredientsStyle3FirstImg[index].offsetWidth + 50) * .64) + "px";
        element.style.zIndex = 2;
    });
    IngredientsStyle3DottdSqure.forEach((element, index) => {
        element.style.height = (element.offsetWidth) + "px";
        element.style.top = -150 + "px";
        element.style.right = IngredientsStyle3FirstImg[index].offsetWidth + "px";
        element.style.zIndex = 1;
    });
    IngredientsStyle4FirstImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * 1.6) + "px";
        element.style.top = 0;
        element.style.right = (element.offsetWidth + 10) + "px";
    });
    IngredientsStyle4SecondImg.forEach((element, index) => {
        element.style.height = (element.offsetWidth * 1.6) + "px";
        element.style.top = -40 + "px";
        element.style.right = 0;
        // change z-index
        element.style.zIndex = 2;
    });
    IngredientsStyle4DottdSqure.forEach((element, index) => {
        element.style.height = (element.offsetWidth) + "px";
        element.style.top = -100 + "px";
        element.style.right = -60 + "px";
        // change z-index
        element.style.zIndex = 1;
    });

    IngredientsStyle1.forEach((element, index) => {
        element.style.height = (IngredientsStyle1FirstImg[index].offsetHeight + 50) + "px";
    });
    IngredientsStyle2.forEach((element, index) => {
        element.style.height = (IngredientsStyle2FirstImg[index].offsetHeight + 150) + "px";
    });
    IngredientsStyle3.forEach((element, index) => {
        element.style.height = (IngredientsStyle3FirstImg[index].offsetHeight + 150) + "px";
    });
    IngredientsStyle4.forEach((element, index) => {
        element.style.height = (IngredientsStyle4FirstImg[index].offsetHeight + 50) + "px";
    });

}

function manageAllWidthAndHeight() {
    screenWidth = window.innerWidth;
    if (screenWidth > 991) {
        RightSideOurStory.style.minHeight = mainOurStoryBorder.offsetHeight + 100 + "px";
    } else {

        firstImageAboutUs.style.height = firstImageAboutUs.offsetWidth * 1.1 + "px";
        secondImageAboutUs.style.height = secondImageAboutUs.offsetWidth + "px";
        firstBorderAboutUs.style.height = firstImageAboutUs.offsetHeight * .771 + "px";
        firstBorderAboutUs.style.width = firstImageAboutUs.offsetWidth * .771 + "px";
        secondBorderAboutUs.style.height = secondImageAboutUs.offsetHeight * .771 + "px";
        secondBorderAboutUs.style.width = secondImageAboutUs.offsetWidth * .771 + "px";
        RightSideAboutUs.style.minHeight = firstImageAboutUs.offsetHeight + 100 + "px";
        mainOurStoryBorder.style.height = mainOurStoryBorder.offsetWidth + "px";
        firstOurStoryBorder.style.height = mainOurStoryBorder.offsetHeight * .5 + "px";
        firstOurStoryBorder.style.width = mainOurStoryBorder.offsetWidth * .5 + "px";
        secondOurStoryBorder.style.height = mainOurStoryBorder.offsetHeight * .5 + "px";
        secondOurStoryBorder.style.width = mainOurStoryBorder.offsetWidth * .5 + "px";
        RightSideOurStory.style.minHeight = mainOurStoryBorder.offsetHeight + 100 + "px";
    }
}

function manageHomeHeader() {
    if (screenWidth > 991) {
        headerCarousel.style.height = window.innerHeight - topBar.offsetHeight - navBar.offsetHeight - headerTopHr.offsetHeight - parseInt(window.getComputedStyle(headerTopHr).getPropertyValue('margin-top')) + "px";
    } else {
        headerCarousel.style.height = window.innerHeight - topBar.offsetHeight - navBar.offsetHeight - headerTopHr.offsetHeight - parseInt(window.getComputedStyle(headerTopHr).getPropertyValue('margin-top')) + 100 + "px";
    }
}

const Survey = {
    selector: {
        survey: document.querySelector('.survey'),
        labels_1: document.querySelectorAll('.radio-1'),
        labels_2: document.querySelectorAll('.radio-2'),
    },

    _handelLabelWidthAndHeight: function (elements, col = 5, margin = false) {
        if (this.selector.survey) {
            elements.forEach((element, index) => {
                let parentWidth;
                if (margin) {
                    parentWidth = element.parentElement.offsetWidth - (25 * 4);
                } else {
                    parentWidth = element.parentElement.offsetWidth;
                }
                element.style.width = parentWidth / col + "px";
                element.style.height = parentWidth / col + "px";
            });
        }
    },
};

// Js dom ready
document.addEventListener("DOMContentLoaded", function () {
    // set header carousel height window.height - topBar.height - navBar.height - headerTopHr.height
    if (url == "index.html") {
        manageHomeHeader()
        manageAllWidthAndHeight();
        manageOurStory();
        ManageAboutUs();
    } else if (url == 'about.html') {
        manageAllWidthAndHeight();
        manageOurStory();
        ManageAboutUs();

    } else if (url == 'ingredients.html') {
        manageIngredients();
    }
    if (galleryElement) {
        lightGallery(galleryElement), {
            thumbnail: false
        };
    }
    Survey._handelLabelWidthAndHeight(Survey.selector.labels_1, 5, true);
    Survey._handelLabelWidthAndHeight(Survey.selector.labels_2, 10);
    if (menuElement && window.innerWidth < 992) {
        // remove background image
        menuElement.style.backgroundImage = "none";
    }
});

// Js window resize
window.addEventListener("resize", function () {
    // set header carousel height window.height - topBar.height - navBar.height - headerTopHr.height
    if (url == "index.html") {
        manageHomeHeader()
        manageAllWidthAndHeight();
        manageOurStory();
        ManageAboutUs();
    } else if (url == 'about.html') {
        manageAllWidthAndHeight();
        manageOurStory();
        ManageAboutUs();
    } else if (url == 'ingredients.html') {
        manageIngredients();
    }
    Survey._handelLabelWidthAndHeight(Survey.selector.labels_1, 5, true);
    Survey._handelLabelWidthAndHeight(Survey.selector.labels_2, 10);
    if (menuElement && window.innerWidth < 992) {
        // remove background image
        menuElement.style.backgroundImage = "none";
    }
});

// add event listener to survey labels_1
Survey.selector.labels_1.forEach((element) => {
    element.addEventListener('click', function () {
        // get this label input child
        let input = element.querySelector('input[type="radio"]');
        // checked this input
        input.checked = true;
    });
});


