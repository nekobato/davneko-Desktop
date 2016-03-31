"use strict"

const electron = require('electron')
const app = electron.app
const Tray = electron.Tray
const nativeImage = electron.nativeImage
const globalShortcut = electron.globalShortcut
const ipcMain = electron.ipcMain

const DEBUG = process.env.DEBUG ? true : false

const PlayerWindow = require('./player')

var tray, trayIcon, player

app.on('ready', function() {

  player = new PlayerWindow()

  trayIcon = nativeImage.createFromPath(__dirname + '/trayicon.png')
  tray = new Tray(trayIcon)

  tray.on('click', function(event, bounds) {
    controller.toggle(bounds.x)
  })

  player.show()
})

app.on('will-quit', function() {
  globalShortcut.unregisterAll()
})