let qntBlocos = 32

const disco = {
	_tamanhoTotal: qntBlocos * qntBlocos,
	get tamanhoTotal() {
		return this._tamanhoTotal
	},

	_alocado: 0,
	get alocado() {
		return this._alocado
	},
	set alocado(val) {
		this._alocado = val
		callbacks.alocado.forEach(fn => fn(val))
	},

	_disponivel: qntBlocos * qntBlocos,
	get disponivel() {
		return this._disponivel
	},
	set disponivel(val) {
		this._disponivel = val
		callbacks.disponivel.forEach(fn => fn(val))
	}
}

observable('alocado', function(novoValor) {
	$('#alocado').text(novoValor)
})

observable('disponivel', function(novoValor) {
	$('#disponivel').text(novoValor)
})
