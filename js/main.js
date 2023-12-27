$(document).ready(function() {
    $('#carrossel-images').slick({ // COMANDO PARA ROLAR AUTO O CARROSSEL
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){ // quando o evento click for executado no menu 
        $('nav').slideToggle(); // execute esta função: descer ou subir o menu 'nav' 
    })

    $('#telefone').mask('(00) 00000-0000')// por padrao usa '0' para número e 's' para letras       
// identificador - mask - padrão que é solicitado

    $('form').validate({ // campos requeridos para validação
        rules: {
            nome: { // chamando pelo 'name'
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: true,
            }
        }, 
        messages: {
            nome: 'Por favor, insira seu nome.'
        },
        submitHandler: function(form) {  // interceptando o envio do formulário caso haja algum erro
            console.log(form)
        },
        invalidHandler: function(evento, validador) { // detecta quais campos estão preenchidos incorretamente
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() { // quando realizar o click em algum botao "tenho interese"
        const destino = $('#contato'); // destino será contatos no formulário
        const nomeVeiculo = $(this).parent().find('h3').text(); // encontrando "nome do carro (h3)"

        $('#veiculo-interesse').val(nomeVeiculo); // add o h3 em "veiculo-interesse" no formulário

        $('html').animate({ // animação para descer a tela até o destino 
            scrollTop: destino.offset().top 
        }, 1000) // 1000 milisegundos para acontecer a animação
    })
})