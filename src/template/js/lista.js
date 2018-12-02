let $listaArquivos = $('#listaArquivos')

function addArquivoLista(arquivo) {
	let itemLista = $(`
	<tr hash='${arquivo.id}' data-toggle="modal" data-target="#editarArquivo" data-nomearquivo="${arquivo.nome}" data-tamanho="${arquivo.tamanho}">
		<td style="background-color: ${arquivo.cor}"></td>
		<td>${arquivo.nome} (${arquivo.tamanho}mb)</td>
		<td>${arquivo.dataCriacao.format('DD/MM/YYYY h:mm:s')}</td>
    </tr>`)

	itemLista.on('click', modalEditArquivo)
	$listaArquivos.append(itemLista)
}

function remontarLista() {
	$listaArquivos.empty()
	arquivos.map(arquivo => {
		addArquivoLista(arquivo)
	})
}
