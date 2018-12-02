particlesJS.load('particles', 'json/particles.json', () => {
	$('.particles-js-canvas-el').height(window.innerHeight > $('html').innerHeight() ? window.innerHeight : $('html').innerHeight())
})

window.addEventListener('resize', () => {
	$('.particles-js-canvas-el').width($('html').innerWidth())
	$('.particles-js-canvas-el').height(window.innerHeight > $('html').innerHeight() ? window.innerHeight : $('html').innerHeight())
})

$(document).ready(() => {
	gerarBlocos()

	$('[data-toggle="popover"]').popover()
	$('.popover-dismiss').popover({
		trigger: 'focus'
	})
	setInterval(() => {
		$('#dataCriacao').val(moment().format('DD/MM/YYYY hh:mm:s'))
	}, 1000)
	// $('#dataCriacao').val(moment().format('DD/MM/YYYY h:mm:s'))
	$('#cor_add').colorpicker({ color: gerarCorAleatoria() })

	toastr.options = {
		closeButton: true,
		debug: false,
		newestOnTop: false,
		progressBar: false,
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		onclick: null,
		showDuration: '300',
		hideDuration: '1000',
		timeOut: '5000',
		extendedTimeOut: '1000',
		showEasing: 'swing',
		hideEasing: 'linear',
		showMethod: 'fadeIn',
		hideMethod: 'fadeOut'
	}

	$('#nomeArquivo_add').focus()

	$('#editarArquivo').on('shown.bs.modal', () => {
		$('#form-edit input#nomeArquivo_edit').focus()
	})
})

function modalEditArquivo(e) {
	let hash = e.currentTarget.getAttribute('hash')
	let arquivo = arquivos.find(arq => {
		return arq.id === hash
	})

	$('#form-edit input#hash').val(hash)
	$('#form-edit i#cor_edit').css({ background: arquivo.cor, cursor: 'not-allowed' })
	$('#form-edit input#nomeArquivo_edit').val(arquivo.nome)
	$('#form-edit input#tamanho_edit').val(arquivo.tamanho)
	$('#form-edit input#dataCriacao_edit').val(arquivo.dataCriacao.format('DD/MM/YYYY h:mm:s'))

	$('#editarArquivo').modal('toggle')
}
