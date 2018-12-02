let $form_add = $('form#form-add').validate({
	debug: true,
	submitHandler: form => {
		try {
			addArquivo(nomeArquivo_add.value, tamanho_add.value)
			$('#cor_add')[0].children[0].firstChild.style.background = gerarCorAleatoria()
			$form_add.resetForm()
			$('form#form-add input#nomeArquivo_add').val('')
			$('form#form-add input#tamanho_add').val('')
			$('#nomeArquivo_add').focus()
		} catch (e) {
			console.error(e)
			let er = JSON.parse(e.message)
			toastr['error'](er.descricao, er.titulo)
		}
	},
	focusCleanup: true,
	errorClass: 'is-invalid',
	rules: {
		nomeArquivo_add: {
			required: {
				depends: function() {
					$(this).val($.trim($(this).val()))
					return true
				}
			},
			minlength: 1
		},
		tamanho_add: {
			required: true,
			number: true,
			range: [1, 1024]
		}
	},
	messages: {
		nomeArquivo_add: {
			required: 'O nome do arquivo não pode ser vazio.',
			minlength: 'Informe pelo menos 1 caractere.'
		},
		tamanho_add: {
			required: 'O tamanho do arquivo não pode ser vazio.',
			number: 'Informe somente caracteres numéricos,',
			range: 'Informe o tamanho entre {0} e {1}.'
		}
	}
})

let $form_edit = $('form#form-edit').validate({
	debug: true,
	submitHandler: form => {
		try {
			editarArquivo(hash.value, nomeArquivo_edit.value, tamanho_edit.value)
			$form_edit.resetForm()
			$('#editarArquivo').modal('toggle')
			$('form#form-edit').trigger('reset')
			$('#nomeArquivo_add').focus()
		} catch (e) {
			console.error(e)
			let er = JSON.parse(e.message)
			toastr['error'](er.descricao, er.titulo)
		}
	},
	focusCleanup: true,
	errorClass: 'is-invalid',
	rules: {
		hash: {
			required: true
		},
		nomeArquivo_edit: {
			required: {
				depends: function() {
					$(this).val($.trim($(this).val()))
					return true
				}
			},
			minlength: 1
		},
		tamanho_edit: {
			required: true,
			number: true,
			range: [1, 1024]
		}
	},
	messages: {
		nomeArquivo_edit: {
			required: 'O nome do arquivo não pode ser vazio.',
			minlength: 'Informe pelo menos 1 caractere.'
		},
		tamanho_edit: {
			required: 'O tamanho do arquivo não pode ser vazio.',
			number: 'Informe somente caracteres numéricos,',
			range: 'Informe o tamanho entre {0} e {1}.'
		}
	}
})
