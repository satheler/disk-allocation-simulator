let blocos = []

function gerarBlocos() {
	for (let i = 0; i < qntBlocos; i++) {
		let linha = $('<tr></tr>')
		$('#blocos').append(linha)
		for (let j = 0; j < qntBlocos; j++) {
			let bloco = $('<td class="pt-0 pl-0 pr-0 pb-0" style="background-color: gray"></td>')
			let btn = $('<button class="bloco" data-trigger="focus" data-placement="top" data-toggle="popover" data-content="Não Alocado">&nbsp</button>')

			bloco.append(btn)
			linha.append(bloco)
			blocos.push(bloco)

			btn.on('dblclick', e => {
				if (btn.attr('hash')) {
					modalEditArquivo(e)
				}
			})
		}
	}
}

function alocarArquivo(arquivo) {
	if ($('#listaVazia').is(':visible')) {
		$('#listaVazia').hide()
	}

	for (let i = 0; i <= blocos.length; i++) {
		if (blocos[i].children().attr('hash') === undefined) {
			for (let j = 0; j < arquivo.tamanho; j++) {
				configurarBloco(blocos[i], arquivo)
				i++
			}
			break
		}
	}
}

function configurarBloco(bloco, arquivo) {
	bloco.css('background-color', arquivo.cor)
	bloco.children().attr('hash', arquivo.id)
	bloco.children().attr('data-content', `Alocado para ${arquivo.nome}`)
}

function zerarBloco(bloco) {
	bloco.css('background-color', 'gray')
	bloco.children().removeAttr('hash')
	bloco.children().attr('data-content', `Não Alocado`)
}

function remontarBlocos() {
	blocos.map(bloco => {
		zerarBloco(bloco)
	})
	arquivos.map(arquivo => {
		alocarArquivo(arquivo)
	})
}

function verificarDisponibilidade(tamanho) {
	if (tamanho > disco.disponivel) {
		throw new Error('{"titulo":"Libere espaço","descricao":"Para fazer esta ação, diminua ou remova outros arquivos."}')
	}

	disco.alocado += parseInt(tamanho)
	disco.disponivel = parseInt(disco.tamanhoTotal) - parseInt(disco.alocado)
}
