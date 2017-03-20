const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

var heading = document.getElementsByClassName("heading")[0]
var intro_para = document.getElementsByClassName("intro_para")[0]
var content = document.getElementsByClassName("actions")[0]
heading.addEventListener("animationend", listener, false);
intro_para.addEventListener("animationend", content_listener, false);
content.style.display = "none"

function listener(e) {
    console.log("Showing intro para")
    intro_para.style.visibility = 'visible'
}
function content_listener(e) {
    console.log("Showing Content")
    content.style.display = "table"
}
