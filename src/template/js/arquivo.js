function addArquivo(nome, tamanho) {
	verificarDisponibilidade(tamanho)

	let cor = $('#cor_add')[0].children[0].firstChild.style.background
	let dataCriacao = moment()

	let arquivo = {
		_id: SHA256(nome + tamanho + dataCriacao + cor).toString(),
		get id() {
			return this._id
		},

		_nome: nome,
		get nome() {
			return this._nome
		},
		set nome(val) {
			this._nome = val
			callbacks.nome.forEach(fn => fn(val))
		},

		_tamanho: tamanho,
		get tamanho() {
			return this._tamanho
		},
		set tamanho(val) {
			this._tamanho = val
			callbacks.tamanho.forEach(fn => fn(val))
		},

		_dataCriacao: dataCriacao,
		get dataCriacao() {
			return this._dataCriacao
		},
		set dataCriacao(val) {
			this._dataCriacao = val
			callbacks.dataCriacao.forEach(fn => fn(val))
		},

		_cor: cor,
		get cor() {
			return this._cor
		},
		set cor(val) {
			this._cor = val
			callbacks.cor.forEach(fn => fn(val))
		}
	}

	arquivos.push(arquivo)

	addArquivoLista(arquivo)
	alocarArquivo(arquivo)
}

function editarArquivo(hash, nome, tamanho) {
	let arquivo = arquivos.find(arq => {
		return arq.id === hash
	})

	disco.alocado -= arquivo.tamanho
	disco.disponivel = parseInt(disco.tamanhoTotal) - parseInt(disco.alocado)

	verificarDisponibilidade(tamanho)

	arquivo.nome = nome
	arquivo.tamanho = tamanho

	remontarLista()
	remontarBlocos()
}

observable('nome', function(novoValor) {})

observable('tamanho', function(novoValor) {})
