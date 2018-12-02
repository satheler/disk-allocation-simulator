var $ = (jQuery = require('jquery'))
var moment = require('moment')
var toastr = require('toastr')
var SHA256 = require('crypto-js/sha256')

const callbacks = {}
let arquivos = []

moment.locale('pt-br')

function observable(prop, fn) {
	if (!callbacks[prop]) callbacks[prop] = []
	callbacks[prop].push(fn)
}

function gerarCorAleatoria() {
	var letras = 'ABC0123456789DEF'
	var cor = '#'
	for (var i = 0; i < 6; i++) {
		cor += letras[Math.floor(Math.random() * 16)]
	}
	return cor
}
