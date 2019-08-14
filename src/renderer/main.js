import Vue from 'vue'
import axios from 'axios'
import serialport from 'serialport'
import App from './App'
import router from './router'
import{ store } from './store/store'
import{ setIntervalAsync } from 'set-interval-async/dynamic'
import{ clearIntervalAsync } from 'set-interval-async'
import { remote } from 'electron'
import VueGridLayout from 'vue-grid-layout';
import Vuetify from 'vuetify'

const { app, Menu } = require('electron').remote

const template = [
  // { role: 'appMenu' }
  ...(process.platform === 'darwin' ? [{
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternalSync('https://electronjs.org') }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

Vue.use(require('vue-chartist')).default

if (!process.env.IS_WEB) Vue.use(require('vue-electron')).default
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
    require('vue-devtools').install()
	const currentWindow = remote.getCurrentWindow()
	currentWindow.openDevTools()
  }

Vue.serial = Vue.prototype.$serial = serialport

store.dispatch('version'),
store.dispatch('reset'),
store.dispatch('poll'),
store.dispatch('poll2'),
store.dispatch('poll3'),
store.dispatch('poll4'),
store.dispatch('poll5'),

store.state.interval1 = setIntervalAsync(function(){
  store.dispatch('err1')
}, 5000)
store.state.interval2 = setIntervalAsync(function(){
  store.dispatch('err2')
}, 5000)
store.state.interval3 = setIntervalAsync(function(){
  store.dispatch('err3')
}, 5000)
store.state.interval4 = setIntervalAsync(function(){
  store.dispatch('err4')
}, 5000)
store.state.interval5 = setIntervalAsync(function(){
  store.dispatch('err5')
}, 5000)
store.state.interval6 = setIntervalAsync(function(){
  store.dispatch('getIon')
}, 1000)
store.state.interval7 = setIntervalAsync(function(){
  store.dispatch('getConv')
}, 1000)
// store.state.interval8 = setIntervalAsync(function(){
//   store.dispatch('switchConv')
// }, 1000)
store.state.interval9 = setIntervalAsync(function(){
  store.dispatch('getValvePos')
}, 2000)
store.state.interval10 = setIntervalAsync(function(){
  store.dispatch('getSetpoint')
},2000)
store.state.interval11 = setIntervalAsync(function(){
  store.dispatch('getMano')
}, 2000)
store.state.interval12 = setIntervalAsync(function(){
  store.dispatch('getFpower')
}, 1000)
store.state.interval13 = setIntervalAsync(function(){
  store.dispatch('switchPower')
}, 1000)
store.state.interval14 = setIntervalAsync(function(){
  store.dispatch('safety')
}, 5000)

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

app.on('will-quit',function(){
  this.port.close()
  this.port2.close()
  this.port3.close()
  this.port4.close()
  this.port5.close()
})

app.on('quit',function(){
  this.port.close()
  this.port2.close()
  this.port3.close()
  this.port4.close()
  this.port5.close()
})
