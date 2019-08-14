import Vue from 'vue';
import Vuex from 'vuex';

	


//import { createPersistedState, createSharedMutations } from "vuex-electron";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
	//strict: process.env.NODE_ENV !== 'production',
	state: {
		dispayGrid : [
			{"x":0,"y":0,"w":1,"h":1,"i":"0"},
			{"x":1,"y":0,"w":1,"h":1,"i":"1"},
			{"x":2,"y":0,"w":1,"h":1,"i":"2"},
			{"x":3,"y":0,"w":1,"h":1,"i":"3"}
		],
		stepsGrid : [
			{"x":0,"y":0,"w":2,"h":1,"i":"0"}
		],
		substepsGrid : [
			{"x":0,"y":0,"w":2,"h":1,"i":"0"},
			{"x":2,"y":0,"w":2,"h":1,"i":"1"},
			{"x":4,"y":0,"w":2,"h":1,"i":"2"},
			{"x":6,"y":0,"w":2,"h":1,"i":"3"},
			{"x":0,"y":2,"w":2,"h":1,"i":"4"},
			{"x":2,"y":2,"w":2,"h":1,"i":"5"}
		],
		convNumber1: null,
		convNumber2: null,
		ionNumber: null,
		read1: true,
		read1: false,
		interval1: null,
		interval2: null,
		interval3: null,
		interval4: null,
		interval5: null,
		interval6: null,
		interval7: null,
		interval8: null,
		interval9: null,
		interval10: null,
		interval11: null,
		interval12: null,
		interval13: null,
		interval14: null,
		err: {
			serial1read: false,
			serial1closed: false,

			serial2closed: false,
			serial2read: false,

			serial3closed: false,
			serial3read: false,

			serial4closed: false,
			serial4read: false,

			serial5closed: false,
			serial5read: false
		},
    switches: {
      ald0: false,
      ald1: false,
      gate_valve: false,
      purge: false,
			xps: false,
			evap: false,
			cryo: false,
      ion: false,
      conv: false,
      throttle: true,
      evap: true,
      RF: false,
      Refresh: false
    },
		switch: {
			ald0: 0,
      ald1: 0,
      gate_valve: 0,
      purge: 0,
			xps: 0,
			evap: 0,
			cryo: 0,
      ion: 0,
      conv: 0,
      throttle: 1,
      evap: 0,
      RF: 0,
      Refresh: 0
		},
    mfc0: {
      sp: 0,
      fr: 0
    },
    mfc1: {
      sp: 0,
      fr: 0
    },
    mfc2: {
      sp: 0,
      fr: 0
    },
		mfc3: {
      sp: 0,
      fr: 0
    },
		errorTemp: [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
		array: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    temps: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    hg_1: {
      ha: 0,
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0,
      h7: 0,
      h8: 0,
      h9: 0,
      h10: 0,
      h11: 0,
      h12: 0,
      h13: 0,
      h14: 0,
      ta: 0,
			tc: 0,
			tl: 0,
      t1: 0,
      t2: 0,
      t3: 0,
      t4: 0,
      t5: 0,
      t6: 0,
      t7: 0,
      t8: 0,
      t9: 0,
      t10: 0,
      t11: 0,
      t12: 0,
      t13: 0,
      t14: 0,
			z: 14
    },
    hg_2: {
      ha: 0,
      h1: 0,
      h2: 0,
      h3: 0,
      h4: 0,
      h5: 0,
      h6: 0,
      h7: 0,
    },
		systemPressure: null,
    ionpressure: null,
    convpressure1: null,
    convpressure2: null,
    command: "",
    response: "",
		input3: "",
		input4: "",
		input5: "",
    throttleSet: "",
    setpoint: "",
    valvePos: "",
    Fpower: "",
    Rpower: "",
    RFsetpoint: "",
    setpointRF: "0",
    manopressure: "",
    port: {},
    port2: {},
    port3: {},
    port4: {},
    port5: {},
		x: false,
		w: false,
	},
	getters: {

	},
	mutations: {
		uuidv1(){
			const uuidv1 = require('uuid/v1');
			uuid.v1() == "step.uuid";

		},
		onClickaddStep (state, step){
			state.stepsGrid.push(step);
		},

		onClick(state){

		},
		reset(state){
			state.convNumber1= null,
			state.convNumber2= null,
			state.ionNumber= null,
			state.read1 = true,
			state.read2 = false,
			state.err.serial1read= false,
			state.err.serial1closed= false,
			state.err.serial2closed= false,
			state.err.serial2read= false,
			state.err.serial3closed= false,
			state.err.serial3read= false,
			state.err.serial4closed= false,
			state.err.serial4read= false,
			state.err.serial5closed= false,
			state.err.serial5read= false,
		  state.switches.ald0= false,
		  state.switches.ald1= false,
		  state.switches.gate_valve= false,
		  state.switches.purge= false,
			state.switches.xps= false,
			state.switches.evap= false,
			state.switches.cryo= false,
		  state.switches.ion= false,
		  state.switches.conv= false,
		  state.switches.throttle= true,
		  state.switches.evap= true,
		  state.switches.RF= false,
		  state.switches.Refresh= false,
			state.switch.ald0= 0,
		  state.switch.ald1= 0,
		  state.switch.gate_valve= 0,
		  state.switch.purge= 0,
			state.switch.xps= 0,
			state.switch.cryo= 0,
		  state.switch.ion= 0,
		  state.switch.conv= 0,
		  state.switch.throttle= 1,
		  state.switch.evap= 0,
		  state.switch.RF= 0,
		  state.switch.Refresh= 0,
		  state.mfc0.sp= 0,
		  state.mfc0.fr= 0,
		  state.mfc1.sp= 0,
		  state.mfc1.fr= 0,
		  state.mfc2.sp= 0,
		  state.mfc2.fr= 0,
			state.mfc3.sp= 0,
		  state.mfc3.fr= 0,
			state.errorTemp= [false, false, false, false, false, false, false, false, false, false, false, false, false, false],
			state.array= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  state.temps= [
		  	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0],
		    [0, 0, 0, 0, 0, 0, 0, 0, 0]
		  ],
			state.displayGrid = [
				{"x":0,"y":0,"w":1,"h":1,"i":"0"},
				{"x":1,"y":0,"w":1,"h":1,"i":"1"},
				{"x":2,"y":0,"w":1,"h":1,"i":"2"},
				{"x":3,"y":0,"w":1,"h":1,"i":"3"}
			],
			state.stepsGrid = [
				{"x":0,"y":0,"w":2,"h":1,"i":"0"}
			],
			state.substepsGrid = [
				{"x":0,"y":0,"w":2,"h":1,"i":"0"},
				{"x":2,"y":0,"w":2,"h":1,"i":"1"},
				{"x":4,"y":0,"w":2,"h":1,"i":"2"},
				{"x":6,"y":0,"w":2,"h":1,"i":"3"},
				{"x":0,"y":2,"w":2,"h":1,"i":"4"},
				{"x":2,"y":2,"w":2,"h":1,"i":"5"}
			],
			state.gridPlaceHolders = [
				{"x":0, "y": 0, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":2, "y": 0, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":4, "y": 0, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":6, "y": 0, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":0, "y": 1, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":2, "y": 1, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":4, "y": 1, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":6, "y": 1, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":0, "y": 2, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":2, "y": 2, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":4, "y": 2, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":6, "y": 2, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":0, "y": 3, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":2, "y": 3, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":4, "y": 3, "w": 2, "h": 1, "i": String(state.stepsGrid.length) },
				{"x":6, "y": 3, "w": 2, "h": 1, "i": String(state.stepsGrid.length) }
			],
		  state.hg_1.ha= 0,
		  state.hg_1.h1= 0,
		  state.hg_1.h2= 0,
		  state.hg_1.h3= 0,
		  state.hg_1.h4= 0,
		  state.hg_1.h5= 0,
		  state.hg_1.h6= 0,
		  state.hg_1.h7= 0,
		  state.hg_1.h8= 0,
		  state.hg_1.h9= 0,
		  state.hg_1.h10= 0,
		  state.hg_1.h11= 0,
		  state.hg_1.h12= 0,
		  state.hg_1.h13= 0,
		  state.hg_1.h14= 0,
		  state.hg_1.ta= 0,
			state.hg_1.tl= 0,
			state.hg_1.tc= 0,
		  state.hg_1.t1= 0,
		  state.hg_1.t2= 0,
		  state.hg_1.t3= 0,
		  state.hg_1.t4= 0,
		  state.hg_1.t5= 0,
		  state.hg_1.t6= 0,
		  state.hg_1.t7= 0,
		  state.hg_1.t8= 0,
		  state.hg_1.t9= 0,
		  state.hg_1.t10= 0,
		  state.hg_1.t11= 0,
		  state.hg_1.t12= 0,
		  state.hg_1.t13= 0,
		  state.hg_1.t14= 0,
			state.hg_1.z= 14,
		  state.hg_2.ha= 0,
		  state.hg_2.h1= 0,
		  state.hg_2.h2= 0,
		  state.hg_2.h3= 0,
		  state.hg_2.h4= 0,
		  state.hg_2.h5= 0,
		  state.hg_2.h6= 0,
		  state.hg_2.h7= 0,
			state.systemPressure= null,
		  state.ionpressure= null,
		  state.convpressure1= null,
		  state.convpressure2= null,
		  state.command= "",
		  state.response= "",
			state.input3= "",
			state.input4= "",
			state.input5= "",
		  state.throttleSet= "",
		  state.setpoint= "",
		  state.valvePos= "",
		  state.Fpower= "",
		  state.Rpower= "",
		  state.RFsetpoint= "",
		  state.setpointRF= "",
		  state.manopressure= "",
			state.x= false,
			state.w= false
		},
		version(state) {
			state.version = require('electron').remote.app.getVersion()
		},
		onGroupChange(state, payload){
			if (state.errorTemp[0] !== true){
				state.hg_1.h1 = payload
			}
			if (state.errorTemp[1] !== true){
				state.hg_1.h2 = payload
			}
			if (state.errorTemp[2] !== true){
				state.hg_1.h3 = payload
			}
			if (state.errorTemp[3] !== true){
				state.hg_1.h4 = payload
			}
			if (state.errorTemp[4] !== true){
				state.hg_1.h5 = payload
			}
			if (state.errorTemp[5] !== true){
				state.hg_1.h6 = payload
			}
			if (state.errorTemp[6] !== true){
				state.hg_1.h7 = payload
			}
			if (state.errorTemp[7] !== true){
				state.hg_1.h8 = payload
			}
			if (state.errorTemp[8] !== true){
				state.hg_1.h9 = payload
			}
			if (state.errorTemp[9] !== true){
				state.hg_1.h10 = payload
			}
			if (state.errorTemp[10] !== true){
				state.hg_1.h11 = payload
			}
			if (state.errorTemp[11] !== true){
				state.hg_1.h12 = payload
			}
			if (state.errorTemp[12] !== true){
				state.hg_1.h13 = payload
			}
			if (state.errorTemp[13] !== true){
				state.hg_1.h14 = payload
			}
		},
		onSwitchAld0(state, ald0){
			state.switches.ald0 = ald0
			if (ald0){
				state.switch.ald0 = 1
			}
			else {
				state.switch.ald0 = 0
			}
		},
		onSwitchAld1(state, ald1){
			state.switches.ald1 = ald1
			if (ald1){
				state.switch.ald1 = 1
			}
			else {
				state.switch.ald1 = 0
			}
		},
		onSwitchWelch(state, gate_valve){
			state.switches.gate_valve = gate_valve
			if (gate_valve){
				state.switch.gate_valve = 1
			}
			else {
				state.switch.gate_valve = 0
			}
		},
		onSwitchVent(state, purge){
			state.switches.purge = purge
			if (purge){
				state.switch.purge = 1
			}
			else {
				state.switch.purge = 0
			}
		},
		onSwitchXps(state, xps){
			state.switches.xps = xps
			if (xps){
				state.switch.xps = 1
			}
			else {
				state.switch.xps = 0
			}
		},
		onSwitchCryo(state, cryo){
			state.switches.cryo = cryo
			if (cryo){
				state.switch.cryo = 1
			}
			else {
				state.switch.cryo = 0
			}
		},
		onSwitchEvap(state, evap){
			state.switches.evap = evap
			if (evap){
				state.switch.evap = 0
			}
			else {
				state.switch.evap = 1
			}
		},
		onSwitchIon(state, ion){
			state.switches.ion = ion
			if (ion){
				state.x = true,
				state.ionpressure = '',
				state.ionNumber = null,
				state.switch.ion = 1
			}
			else {
				state.x = false,
				state.ionpressure = '',
				state.ionNumber = null,
				state.switch.ion = 0
			}
		},
		onSwitchThrottle(state, throttle){
			state.switches.throttle = throttle
			if (throttle){
				state.switch.throttle = 1
			}
			else {
				state.switch.throttle = 0
			}
		},
		onSwitchRF(state, RF){
			state.switches.RF = RF
			if (RF){
				state.switch.RF = 1
			}
			else {
				state.switch.RF = 0
			}
		},
		RFsetpoint(state, value){
			state.setpointRF = value
		},
		throttleSet(state, value){
			state.throttleSet = value
		},
		onRFsetpointChange(state, payload){
			alert(payload)
			//state.RFsetpoint = ""
		},
		getIon(state){
			if (state.x) {
        // this.write3("#01RD");
      }
			else {
        state.ionpressure = "",
				state.ionNumber = null
      }
		},
		switchPower(state){
			if (state.w) {
        state.w = false
      }
			else {
        state.w = true
      }
		},
		switchConv(state){
				if (state.read1) {
        	state.read1 = false
					state.read2 = true
      	}
				else if (state.read2){
        	state.read1 = true
					state.read2 = false
      	}
		},
		//getConv(state){

		//},
		onCommandChange(state, command){
			state.command = "";
			state.response = "";
		},
		onSetpointChange(state, throttleSet){
			state.throttleSet = ""
		},
		poll(state){
			const SerialPort = require('serialport')
			const Readline = require('@serialport/parser-readline')
			this.port = new SerialPort('COM6', {autoOpen: false, baudRate: 9600, dataBits: 8, stopBits: 1})
			this.port.open (function (err) {
				if(err) {
					console.log('Port: ', err.message)
					state.err.serial1closed = true
				}
				else {
					console.log('Port1 is open')
					state.err.serial1closed = false
				}
			})
			const parser = this.port.pipe(new Readline({delimiter: '\r\n'}))
			parser.on('data', function(data){
				state.array = data.split(',')
				if (state.array.length == 15) {
            state.temps[0].push(parseFloat(state.array[0]))
            state.temps[0].shift()
            state.temps[1].push(parseFloat(state.array[1]))
            state.temps[1].shift()
            state.temps[2].push(parseFloat(state.array[2]))
            state.temps[2].shift()
            state.temps[3].push(parseFloat(state.array[3]))
            state.temps[3].shift()
            state.temps[4].push(parseFloat(state.array[4]))
            state.temps[4].shift()
            state.temps[5].push(parseFloat(state.array[5]))
            state.temps[5].shift()
            state.temps[6].push(parseFloat(state.array[6]))
            state.temps[6].shift()
            state.temps[7].push(parseFloat(state.array[7]))
            state.temps[7].shift()
            state.temps[8].push(parseFloat(state.array[8]))
            state.temps[8].shift()
            state.temps[9].push(parseFloat(state.array[9]))
            state.temps[9].shift()
            state.temps[10].push(parseFloat(state.array[10]))
            state.temps[10].shift()
            state.temps[11].push(parseFloat(state.array[11]))
            state.temps[11].shift()
            state.temps[12].push(parseFloat(state.array[12]))
            state.temps[12].shift()
            state.temps[13].push(parseFloat(state.array[13]))
            state.temps[13].shift()
            state.hg_1.t1 = state.array[0]
            state.hg_1.t2 = state.array[1]
            state.hg_1.t3 = state.array[2]
            state.hg_1.t4 = state.array[3]
            state.hg_1.t5 = state.array[4]
            state.hg_1.t6 = state.array[5]
            state.hg_1.t7 = state.array[6]
            state.hg_1.t8 = state.array[7]
            state.hg_1.t9 = state.array[8]
            state.hg_1.t10 = state.array[9]
            state.hg_1.t11 = state.array[10]
            state.hg_1.t12 = state.array[11]
            state.hg_1.t13 = state.array[12]
            state.hg_1.t14 = state.array[13]
          }
					let error = 0
					let sum = 0
					for(var i = 0; i < state.array.length -1; i++){
						if (state.array[i] == 'FAULT_OPEN') {
							state.errorTemp[i] = true,
							error++
						}
						else if (state.array[i] == 'FAULT_SHORT_GND') {
							state.errorTemp[i] = true,
							error++
						}
						else if (state.array[i] == 'FAULT_SHORT_VCC') {
							state.errorTemp[i] = true,
							error++
						}
						else {
							state.errorTemp[i] = false,
							sum += parseFloat(state.array[i])
						}
					}
					state.hg_1.z= (state.array.length - 1 - error)
					state.hg_1.ta= (sum / (state.hg_1.z)).toFixed(2)
					error = 0
					sum = 0
					for(var i = 0; i < 8; i++){
						if (state.errorTemp[i]){
							error++
						}
						else{
							sum += parseFloat(state.array[i])
						}
					}
					state.hg_1.tc= (sum / (8 - error)).toFixed(2)

					error = 0
					sum = 0
					for(var i = 8; i < 10; i++){
						if (state.errorTemp[i]){
							error++
						}
						else{
							sum += parseFloat(state.array[i])
						}
					}
					state.hg_1.tl= (sum / (2 - error)).toFixed(2)
			}),
			this.port.on('error', function(err){
				console.log('Port1: ', err.message)
				state.err.serial1read = true
			}),
			this.port.on('close', function(){
				console.log('Port1 Disconnected')
				state.err.serial1closed = true,
				state.array= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		  	state.temps= [
		  		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0],
		    	[0, 0, 0, 0, 0, 0, 0, 0, 0]
		  	],
				state.hg_1.ha= 0,
		  	state.hg_1.h1= 0,
		  	state.hg_1.h2= 0,
		  	state.hg_1.h3= 0,
		  	state.hg_1.h4= 0,
		  	state.hg_1.h5= 0,
		  	state.hg_1.h6= 0,
		  	state.hg_1.h7= 0,
			  state.hg_1.h8= 0,
			  state.hg_1.h9= 0,
			  state.hg_1.h10= 0,
			  state.hg_1.h11= 0,
			  state.hg_1.h12= 0,
			  state.hg_1.h13= 0,
			  state.hg_1.h14= 0,
			  state.hg_1.ta= 0,
				state.hg_1.tc= 0,
				state.hg_1.tl= 0,
			  state.hg_1.t1= 0,
			  state.hg_1.t2= 0,
			  state.hg_1.t3= 0,
			  state.hg_1.t4= 0,
			  state.hg_1.t5= 0,
			  state.hg_1.t6= 0,
			  state.hg_1.t7= 0,
			  state.hg_1.t8= 0,
			  state.hg_1.t9= 0,
			  state.hg_1.t10= 0,
			  state.hg_1.t11= 0,
			  state.hg_1.t12= 0,
			  state.hg_1.t13= 0,
			  state.hg_1.t14= 0,
				state.hg_1.z= 14,
			  state.hg_2.ha= 0,
			  state.hg_2.h1= 0,
			  state.hg_2.h2= 0,
			  state.hg_2.h3= 0,
			  state.hg_2.h4= 0,
			  state.hg_2.h5= 0,
			  state.hg_2.h6= 0,
			  state.hg_2.h7= 0
			})
		},
		poll2(state){
			const SerialPort = require('serialport')
			const Readline = require('@serialport/parser-readline')
			// this.port2 = new SerialPort('COM4', { autoOpen: false, baudRate: 9600, dataBits: 8, stopBits: 1})
			this.port2 = new SerialPort('COM4', {autoOpen: false, baudRate: 9600, dataBits: 8, stopBits: 1})
			this.port2.open (function (err) {
				if(err) {
					console.log('Port2: ', err.message)
					state.err.serial2closed = true
				}
				else {
					console.log('Port2 is open')
					state.err.serial2closed = false
				}
			})
			const parser = this.port2.pipe(new Readline({delimiter: '\r\n'}))
			parser.on('data', function(data){
				let array = data.split(',')
				state.mfc0.fr = (parseFloat(array[0]) / 5 * 200).toFixed(2)
        state.mfc1.fr = (parseFloat(array[1]) / 5 * 100).toFixed(2)
        state.mfc2.fr = (parseFloat(array[2]) / 5 * 100).toFixed(2)
				state.mfc3.fr = (parseFloat(array[2]) / 5 * 100).toFixed(2)
			}),
			this.port2.on('error', function(err){
				console.log('Port2: ', err.message)
				state.err.serial2read = true
			}),
			this.port2.on('close', function(){
				console.log('Port2 Disconnected')
				state.err.serial2closed = true
				state.mfc0.sp= 0,
		  	state.mfc0.fr= 0,
		  	state.mfc1.sp= 0,
		  	state.mfc1.fr= 0,
		  	state.mfc2.sp= 0,
		  	state.mfc2.fr= 0,
				state.mfc3.sp= 0,
		  	state.mfc3.fr= 0,
				state.switches.ald1= false,
		  	state.switches.gate_valve= false,
		  	state.switches.purge= false,
				state.switches.xps= false,
				state.switches.evap= true,
				state.switches.cryo= false,
				state.switch.ald0= 0,
		  	state.switch.ald1= 0,
		  	state.switch.gate_valve= 0,
		  	state.switch.purge= 0,
				state.switch.xps= 0,
				state.switch.evap= 0,
				state.switch.cryo= 0
			})
		},
		poll3(state){
			const SerialPort = require('serialport')
			const Readline = require('@serialport/parser-readline')
			this.port3 = new SerialPort('COM16', {autoOpen: false, baudRate: 9600, dataBits: 8, stopBits: 1})
			this.port3.open (function (err) {
				if(err) {
					console.log('Port3: ', err.message)
					state.err.serial3closed = true
				}
				else {
					state.err.serial3closed = false
					console.log('Port3 is open')
				}
			})
			const parser = this.port3.pipe(new Readline({delimiter: '\r'}))
			parser.on('data', function(data){
				//console.log(data)
				state.input3 = data
				state.input3 = state.input3 + "0"
				const number = state.input3.slice(4, 8)
				const value = parseFloat(number)
				const ending = state.input3.slice(8, 12)
				if (state.input3 == "*01 9.90E+090")
				{
					state.ionpressure = "",
					state.ionNumber = null
				}
				else if (ending == "E-05") {
          state.ionpressure = number + ending,
					state.ionNumber = value * 0.00001
        }
				else if (ending == "E-06") {
          state.ionpressure = number + ending,
					state.ionNumber = value * 0.000001
        }
				else if (ending == "E-07") {
          state.ionpressure = number + ending,
					state.ionNumber = value * 0.0000001
        }
				else if (ending == "E-08") {
          state.ionpressure = number + ending,
					state.ionNumber = value * 0.00000001
        }
				else if (ending == "E-09") {
          state.ionpressure = number + ending,
					state.ionNumber = value * 0.000000001
        }
				if (ending == "E-04") {
          if (state.read1) {
            state.convpressure1 = number + ending,
						state.convNumber1 = value * 0.0001
          }
					else if (state.read2){
            state.convpressure2 = number + ending,
						state.convNumber2 = value * 0.0001
          }
        }
				else if (ending == "E-03") {
          if (state.read1) {
            state.convpressure1 = number + ending,
						state.convNumber1 = value * 0.001
          }
					else if (state.read2){
            state.convpressure2 = number + ending,
						state.convNumber2 = value * 0.001
          }
        }
				else if (ending == "E-02") {
          if (state.read1) {
            state.convpressure1 = number + ending,
						state.convNumber1 = value * 0.01
          }
					else if (state.read2){
            state.convpressure2 = number + ending,
						state.convNumber2 = value * 0.01
          }
        }
				else if (ending == "E-01") {
          if (state.read1) {
            state.convpressure1 = number + ending,
						state.convNumber1 = value * 0.1
          }
					else if (state.read2){
            state.convpressure2 = number + ending,
						state.convNumber2 = value * 0.1
          }
        }
				else if (ending == "E+00") {
          if (state.read1) {
            state.convpressure1 = number + ending,
						state.convNumber1 = value
          }
					else if (state.read2){
            state.convpressure2 = number + ending,
						state.convNumber2 = value
          }
        }
				else if (ending == "E+01") {
          if (state.read1) {
            state.convpressure1 = number + ending,
						state.convNumber1 = value * 10
          }
					else if (state.read2){
            state.convpressure2 = number + ending,
						state.convNumber2 = value * 10
          }
        }
				else if (ending == "E+02") {
          if (state.read1) {
            state.convpressure1 = number + ending,
						state.convNumber1 = value * 100
          }
					else if (state.read2){
            state.convpressure2 = number + ending,
						state.convNumber2 = value * 100
          }
        }
				else if (ending == "E+03") {
          if (state.input3 = "*01 1.01E+030") {
            if (state.read1) {
              state.convpressure1 = number + ending
            }
						else if (state.read2){
              state.convpressure2 = '',
							state.convNumber2 = ''
            }
          }
					else {
            if (state.read1) {
              state.convpressure1 = number + ending,
							state.convNumber1 = value * 1000
            }
						else if (state.read2){
              state.convpressure2 = number + ending
							state.convNumber2 = value * 1000
            }
          }
        }
				else {
					if((state.convpressure1 | state.ionpressure) !== null){
						if((state.ionNumber <= state.convpressure1) || state.convpressure1 == null){
							state.systemPressure = state.ionpressure
						}
						else if((state.ionpressure == null) && (state.convpressure1 != null)){
							state.systemPressure = state.convpressure1
						}
					}
          state.response = state.input3
        }
			}),
			this.port3.on('error', function(err){
				console.log('Port3: ', err.message)
				state.err.serial3read = true
			}),
			this.port3.on('close', function(){
				console.log('Port3 Disconnected')
				state.err.serial3closed = true,
				state.convNumber1 = null,
				state.convNumber2 = null,
				state.ionNumber = null,
				state.systemPressure = null,
				state.ionpressure = null,
				state.convpressure1 = null,
				state.convpressure2 = null,
				state.response = '',
				state.read1 = true,
				state.read2 = false,
				state.command= "",
		  	state.response= "",
				state.switches.ion= false,
				state.switches.conv= false,
				state.switch.ion= 0,
		  	state.switch.conv= 0
			})
		},
		poll4(state){
			const SerialPort = require('serialport')
			const Readline = require('@serialport/parser-readline')
			this.port4 = new SerialPort('COM9', {autoOpen: false, baudRate: 9600, dataBits: 8, stopBits: 1})
			this.port4.open (function (err) {
				if(err) {
					console.log('port4: ', err.message)
					state.err.serial4closed = true
				}
				else {
					state.err.serial4closed = false
					console.log('Port4 is open')
				}
			})
			const parser = this.port4.pipe(new Readline({delimiter: '\r'}))
			parser.on('data', function(data){
				state.input4 = data
				const beginning = state.input4.slice(1, 2)
				//const beginning = state.input4.slice(0, 1) // test arduino
				if (beginning == "T") {
          const number = state.input4.slice(2, 9)
					//const number = state.input4.slice(1, 8) // test arduino
        }
				if (beginning == "P") {
          const number = state.input4.slice(2, 9)
					//const number = state.input4.slice(2, 9) // test arduino
          state.manopressure = number
        }
        if (beginning == "V") {
          const number = state.input4.slice(3, 9)
					//const number = state.input4.slice(2, 8) // test arduino
          state.valvePos = number
					if (state.valvePos == '100.00'){
						state.setpoint = '000.00'
					}
					else if (state.valvePos == '000.00'){
						state.setpoint = '000.00'
					}
        }
        if (beginning == "S") {
					//const number = state.input4.slice(4, 10)
          const number = state.input4.slice(3, 9) // test arduino
          state.setpoint = number
        }
			}),
			this.port4.on('error', function(err){
				console.log('Port4: ', err.message)
				state.err.serial4read = true
			}),
			this.port4.on('close', function(){
				console.log('Port4 Disconnected')
				state.err.serial4closed = true,
				state.valvePos= "",
				state.setpoint= "",
				state.manopressure= "",
				state.switches.throttle= true,
				state.switch.throttle= 1
			})
		},
		poll5(state){
			const SerialPort = require('serialport')
			const Readline = require('@serialport/parser-readline')
			this.port5 = new SerialPort('COM17', {autoOpen: false, baudRate: 9600, dataBits: 8, stopBits: 1})
			this.port5.open (function (err) {
				if(err) {
					console.log('Port5: ', err.message)
					state.err.serial5closed = true
				}
				else {
					state.err.serial5closed = false
					console.log('Port5 is open')
				}
			})
			const parser = this.port5.pipe(new Readline({delimiter: '\r'}))
			parser.on('data', function(data){
				state.input5 = data
				if (state.w) {
          state.Rpower = state.input5
        }
				else {
          state.Fpower = state.input5
        }
			}),
			this.port5.on('error', function(err){
				console.log('Port5: ', err.message)
				state.err.serial5read = true
			}),
			this.port5.on('close', function(){
				console.log('Port5 Disconnected')
				state.err.serial5closed = true,
				state.Fpower= "",
		  	state.Rpower= "",
		  	state.RFsetpoint= "",
		  	state.setpointRF= "",
				state.x= false,
				state.w= false,
				state.switch.RF= 0,
				state.switches.RF= false
			})
		}
	},
	methods: {
		
		

	},  
	actions: {
		removeElement(step){
			if (step == this.selectedItem){
				this.selectElement(null);
			}
		},
		
		onClickaddStep ({state, commit}){
			const step = {"x":0, "y": 1, "w": 2, "h": 1, "i": String(state.stepsGrid.length) };
			commit('onClickaddStep', step);
		},
		uuidv1(){
			const uuidv1 = require('uuid/v1');
			uuid.v1();

		},
		// removeStep ({state, commit}){
		// 	state.stepsGrid.pop();
		// },
		onClick(context){
			store.commit('onClick')
		},
		reset(context) {
			store.commit('reset')
		},
		version(context) {
			store.commit('version')
		},
		onGroupChange(context, payload) {
			context.commit('onGroupChange', payload)
			store.dispatch('write', '<' + 14 + ',' + payload + ',' + 4 + '>')
		},
		onHeaterSetpointChange (context, {i,v}) {
			store.dispatch('write', '<' + i + ',' + v + ',' + 0 + '>')
		},
		onSwitchAld0 (context, payload) {
			context.commit('onSwitchAld0', payload),
			store.dispatch('write2', '<' + 9 + ',' + store.state.switch.ald0 + '>')
		},
		onSwitchAld1(context, payload) {
			context.commit('onSwitchAld1', payload)
			store.dispatch('write2', '<' + 5 + ',' + store.state.switch.ald1 + '>')
		},
		onSwitchWelch(context, payload) {
			context.commit('onSwitchWelch', payload)
			store.dispatch('write2', '<' + 12 + ',' + store.state.switch.gate_valve + '>')
		},
		onSwitchVent(context, payload) {
			context.commit('onSwitchVent', payload)
			store.dispatch('write2', '<' + 8 + ',' + store.state.switch.purge + '>')
		},
		onSwitchXps(context, payload) {
			context.commit('onSwitchXps', payload)
			store.dispatch('write2', '<' + 10 + ',' + store.state.switch.xps + '>')
		},
		onSwitchCryo(context, payload) {
			context.commit('onSwitchCryo', payload)
			store.dispatch('write2', '<' + 7 + ',' + store.state.switch.cryo + '>')
		},
		onSwitchEvap(context, payload) {
			context.commit('onSwitchEvap', payload)
			store.dispatch('write2', '<' + 6 + ',' + store.state.switch.evap + '>')
		},
		onSwitchIon(context, payload) {
			if (payload){
				store.dispatch('write3', '#01IG1')
			}
			else {
				store.dispatch('write3', '#01IG0')
			}
			context.commit('onSwitchIon', payload)
		},
		onSwitchThrottle(context, payload) {
			if(payload){
				store.dispatch('write4', 'O')
			}
			else{
				store.dispatch('write4', 'C')
			}
			context.commit('onSwitchThrottle', payload)
		},
		onSwitchRF(context, payload) {
			if(payload){
				store.dispatch('write5', 'G')
			}
			else{
				store.dispatch('write5', 'S')
			}
			context.commit('onSwitchRF', payload)
    },
		RFsetpoint(context, payload) {
			context.commit('RFsetpoint', payload)
		},
		throttleSet(context, payload) {
			context.commit('throttleSet', payload)
		},
		getIon(context) {
			if (store.state.x) {
				store.dispatch('write3', '#01RD')
			}
			context.commit('getIon')
		},
		getValvePos(context) {
			store.dispatch('write4', 'R6')
		},
		getSetpoint(context) {
			store.dispatch('write4', 'R1')
		},
		getFpower(context) {
			if(store.state.w){
				store.dispatch('write5', 'W?')
			}
			else{
				store.dispatch('write5', 'R?')
			}
		},
		switchPower(context) {
			context.commit('switchPower')
    },
		safety(context){
			store.dispatch('write', '<' + 17 + ',' + 0 + ',' + 7 + '>')
			//console.log('safety sent')
		},
		getConv(context) {
			if(store.state.read1){
				store.dispatch('write3', '#01RDCG1')
			}
			else if (store.state.read2){
				store.dispatch('write3', '#01RDCG2')
			}
		},
		getMano(context) {
			store.dispatch('write4', 'R5')
    },
		onCommandChange(context, payload) {
			store.dispatch('write3', payload)
			context.commit('onCommandChange')
		},
		onSetpointChange(context, payload) {
			context.commit('onSetpointChange')
			store.dispatch('write4', 'S1' + payload)
			store.dispatch('write4', 'D1')
		},
		onRFsetpointChange(context, payload) {
			if (payload == 0){
				store.dispatch('write5', 'WS')
			}
			else{
				store.dispatch('write5', payload + ' W')
			}
			context.commit('onRFsetpointChange', payload)
    },
		onMfcChange(context, {i,v}) {
			if (v > 0 && v <= 200) {
				v = Math.round(v * (255 / 200))
			}
			else if (v > 200) {
				v = 256
			}
			store.dispatch('write2', '<' + i + ',' + v + '>')
		},
		poll(context){
			context.commit('poll')
		},
		poll2(context){
			context.commit('poll2')
		},
		poll3(context){
			context.commit('poll3')
		},
		poll4(context){
			context.commit('poll4')
		},
		poll5(context){
			context.commit('poll5')
		},
		write(context, payload){
			this.port.write(payload, function(err){
				if(err) {
					return console.log('Error on write: ', err.message)
				}
			})
		},
		write2(context, payload){
			this.port2.write(payload, function(err){
				if(err) {
					return console.log('Error on write2: ', err.message)
				}
			})
		},
		write3(context, payload){
			this.port3.write(payload + '\r', function(err){
				if(err) {
					return console.log('Error on write3: ', err.message)
				}
			})
		},
		write4(context, payload){
			this.port4.write(payload + '\r', function(err){
				if(err) {
					return console.log('Error on write4: ', err.message)
				}
			})
		},
		write5(context, payload){
			this.port5.write(payload + '\r', function(err){
				if(err) {
					return console.log('Error on write5: ', err.message)
				}
			})
		},
		average(context) {
			let error = 0
			let sum = 0
			for(var i = 0; i < payload.length -1; i++){
				if (payload[i] == 'FAULT_OPEN') {
					error++
				}
				else if (payload[i] == 'FAULT_SHORT_GND') {
					error++
				}
				else if (payload[i] == 'FAULT_SHORT_VCC') {
					error++
				}
				else {
					sum += parseFloat(payload[i])
				}
			}
			return (sum / (payload.length - error)).toFixed(2)
    },
		err1(context) {
			//if(store.state.err.serial1closed || store.state.err.serial1read){
				if(store.state.err.serial1closed){
					store.dispatch('poll')
					console.log('port1 reset')
				}
		},
		err2(context) {
			//if(store.state.err.serial2closed || store.state.err.serial2read){
			if(store.state.err.serial2closed){
				store.dispatch('poll2')
				console.log('port2 reset')
			}
		},
		err3(context) {
			//if(store.state.err.serial3closed || store.state.err.serial3read){
				if(store.state.err.serial3closed){
				store.dispatch('poll3')
				console.log('port3 reset')
			}
		},
		err4(context) {
			//if(store.state.err.serial4closed || store.state.err.serial4read){
			if(store.state.err.serial4closed){
				store.dispatch('poll4')
				console.log('port4 reset')
			}
		},
		err5(context) {
			//if(store.state.err.serial5closed || store.state.err.serial5read){
			if(store.state.err.serial5closed){
				store.dispatch('poll5')
				console.log('port5 reset')
			}
		}
	},
	plugins: [
		createPersistedState()
	],
})
