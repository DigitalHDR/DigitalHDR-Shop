# Guia

`Rota dinâmica para cada item`

`Redux implementado para item dentro do carrinho`
`Redux caso tenha um item igual não carrinho será adicionado +1 a sua contagem`

`Redux remover item do carrinho`

`Redux atualiza quantidade de itens no carrinho`

`Função Formatar dinheiro para real BR`

`Função carrinho vazio caso não tenho item no carrinho, será exibido: Carrinho Vazio...!`

`Função que da uma porcentagem em cima do valor real do item 7%`
`no caso mostrando o valor que era antes com texto riscado`

`Lógica no carrinho, para diferenciar item de itens`

`add biblioteca de alert personalizado`
`usado quando adicionar item no carrinho`

`animação nos card dos protudos(item)`

`animação na lixeira do carrinho`

`Função para ativar o menu-Hamburguer após clicar nele`

`Lógica para fechar o menu-Hamburguer pós clicar em algum dos links`

`Função no useEffect para fechar o menu-Hamburguer após a barra de rolagem da página ser ativado`

`Elemento carrossel add`

`Nova rota dinâmica no elemento Banner, apenas para 1 item no qual é diferente dos outros, pois é um item promocional da loja`

# função do alert caso item já estaja no carrinho mostrar outro tipo de alerta (tipo: item já esta no carrinho)

# fazer função apos clicar fora do menu-hamburguer ele fecha.

==========
erro no elemento button sobre button
==========

<!-- ================Detalhes====================== -->
# não criar componente de botão usando button da problema, que por enquanto não sei resolver, criar com div.

# criar mais de um componente do tipo botão com div, e não dar margem.

# deixar sempre um item no carrinho comentado pra não ter que ficar add depois, no código

# quando for criar componente enviar junto com o .map() se tiver junto com a tag pai que ela estiver, ficar mais facil.

# criar um botao para cada elemento, tive problema de cor pois o btn do header é o mesmo do componente de card.

# deixar o menu-hamburguer com 1000 de z-index assim fica sobre tudo na página, pois tiver problema na qual as setas do carrossel ficava por cima dele.

# usar o <Provider store={store}> do Redux sempre no arquivo index, pois tive problema usando do arquivo App, que não estava sendo encontrando.

# quando for usar o localStorage para deixar o id salvo ou outra coisa do tipo, verificar se esta na rota de login ou de logout, perdi 30 minutos por falta de atenção, coloquei localStorage na rota de cadrastro e estava vendo no navegador a rota de login. muita atenção nessa parte.

=======================================================================
=======================================================================
Backend abaixo
=======================================================================
=======================================================================
# Guia

Base url `http://localhost:5000/api`
Url get TodosUsuarios `http://localhost:5000/api/TodosUsuarios`
=======================================================================
Url post CadastrarUsuario `http://localhost:5000/api/TodosUsuarios/Cadastrar`
parece, esse rota é com base na /api/TodosUsuarios, ou seja os dados que estiverem lá
=======================================================================
caso a senha for muito facíl, vai aparecer uma msg, se for uma senha com numero letra e letra especial não vai.
=======================================================================