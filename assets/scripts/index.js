'use strict';

function selectObject(selector, parent = document) {
    return parent.querySelector(selector);
}

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}


const getInTouchBtn = selectObject('.get-in-touch');
const aboutMeBtn = selectObject('.more');
const aboutMeSection = selectObject('#about-me');
const contactMe=selectObject("#contact-me");


function goToAboutMeSection() {
    aboutMeSection.scrollIntoView({
        behavior: 'smooth',
        block: "end"
    });
}
function goToContactMeSection(){
    contactMe.scrollIntoView({
        behavior: 'smooth',
        block: "start"
    });
} 

onEvent('click',getInTouchBtn,goToContactMeSection);
onEvent('click',aboutMeBtn,goToAboutMeSection);

