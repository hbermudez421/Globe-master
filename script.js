/* * * * * * * * * * * * * * * * * *
 *   Globe - Capstone project      *
 *   Harold Bermudez               *
 *   Date 9/19/17                  *
 * * * * * * * * * * * * * * * * * */

'use strict'

function validateForm() {
  alert("test");
}

function setUpPage() {
  // setUpPage();
  createEventListeners();
}
function createEventListeners() {
  var form = document.getElementById("form");
  if (form.addEventListener) {
    form.addEventListener("submit", validateForm, false);
  } else if (form.attachEvent) {
    form.attachEvent("onsubmit", validateForm);
  }
}

if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
