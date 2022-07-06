"use strict";

// DOM Elements
const login__form = document.getElementById( "login__form" );
const room__buttons = document.querySelectorAll( ".room__button" );

// Room Buttons States Styles
const selectedStyle = {
    backgroundColor: "rgb(67, 97, 238)",
    border: "1px solid transparent",
    color: "rgb(255, 255, 255)",
};
const defaultStyle = {
    color: "rgb(119, 144, 255)",
    backgroundColor: "transparent",
    border: "1px solid rgb(119, 144, 255)",
};

// Style switcher function

const switchStyle = ( element, styles ) => {
    element.style.backgroundColor = styles.backgroundColor;
    element.style.color = styles.color;
    element.style.border = styles.border;
}

// Setting the first room "JavaScript" to selected by default
window.addEventListener( 'load', () => {
    switchStyle( room__buttons[ 0 ], selectedStyle );
} );

// Listening for room selection
room__buttons.forEach( ( button ) => {
    button.addEventListener( "click", ( eve ) => {
        eve.preventDefault();
        console.log( "Hello" );
        room__buttons.forEach( ( item ) => {
            switchStyle( item, defaultStyle );
            console.log( item );
        } );
        switchStyle( eve.target, selectedStyle );
        console.log( eve.target );
    } );
} );

