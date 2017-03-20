const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

var heading = document.getElementsByClassName("heading")[0]
var intro_para = document.getElementsByClassName("intro_para")[0]
heading.addEventListener("animationend", listener, false);

function listener(e) {
    console.log("Showing intro para")
    intro_para.style.visibility = 'visible'
}
