// ****************************************** Library Navigation
// Note: written in vanilla JS
var menuBtn = document.querySelector("#menu-button");
var menuPane = document.querySelector(".main-nav");

menuBtn.onclick = function() {
    if (menuPane.classList) {
        menuPane.classList.toggle("main-nav-show");
    } else {
        var classes = menuPane.className.split(' ');
        var existingIndex = classes.indexOf("main-nav-show");

        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push("main-nav-show");
        }

        menuPane.className = classes.join(' ');
    }
};

menuPane.onclick = function() {
    if (menuPane.classList) {
        menuPane.classList.remove("main-nav-show");
    } else {
        menuPane.className = menuPane.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

// ****************************************** Modal Animation Examples

// Standard Animation Demo
var standardAppearBtn = document.querySelector(".standard-appear-show");
var standardBox = document.getElementById("standard");
var standardBoxClose = document.querySelectorAll("#standard .close, #standard .btn-cancel, #standard .btn-primary");

standardAppearBtn.onclick = function(e) {
    e.preventDefault();
    standardBox.classList.remove("hidden");
    standardBox.classList.add("shown");
};

for (var i = 0; i < standardBoxClose.length; ++i) {
    var elem = standardBoxClose[i];
    elem.onclick = function(e) {
        e.preventDefault();
        standardBox.classList.remove("shown");
        standardBox.classList.add("hidden");
    };
}



// Alert Animation Demo
var alertModalAppearShow = document.querySelector(".alert-appear-show");
var alertModalBox = document.querySelector(".alert-appear");
var alertModalBoxClose = document.querySelectorAll(".alert-appear .close, .alert-appear .btn-cancel, .alert-appear .btn-primary");

alertModalAppearShow.onclick = function(e) {
    e.preventDefault();
    alertModalBox.classList.remove("hidden");
    alertModalBox.classList.add("shown");
}
for (var i = 0; i < alertModalBoxClose.length; ++i) {
    elem = alertModalBoxClose[i];
    elem.onclick = function(e) {
        e.preventDefault();
        alertModalBox.classList.remove("shown");
        alertModalBox.classList.add("hidden");
    };
}

// Failed Validate Demo
var failedValidateModalShow = document.querySelector(".failed-validate-show");
var failedValidateModalBox = document.getElementById("failed-validate");
var failedValidateModalClose = document.querySelectorAll("#failed-validate .close, #failed-validate .btn-cancel");

failedValidateModalShow.onclick = function(e) {
    e.preventDefault();
    failedValidateModalBox.classList.remove("hidden");
    failedValidateModalBox.classList.add("shown");
};
for (var i = 0; i < failedValidateModalClose.length; ++i) {
    elem = failedValidateModalClose[i];
    elem.onclick = function(e) {
        e.preventDefault();
        failedValidateModalBox.classList.remove("shown");
        failedValidateModalBox.classList.add("hidden");
    };
}

//  Failed Validation animation (built so you can click the button and replay the animation multiple times)
var failBtn = document.getElementById("btn-failed-validate");
var failedBox = document.getElementById("failed-validate-box");

failBtn.onclick = function(e) {
    e.preventDefault();
    failedBox.classList.remove("shake");
    failedBox.offsetWidth = failedBox.offsetWidth;
    failedBox.classList.add("shake");
};