function limparTarefa(){
  document.getElementById('mensagem').textContent = ''
  let botao = document.getElementById('btn')

    listaTarefas.innerHTML= ''
    botao.style.display= 'none'
    listaTarefas.value = ''
   
  }

function adicionarTarefa() {

  let botao = document.getElementById('btn')
  let mensagem = "Tarefa adicionada com sucesso!";//
  let mensagemErro= '[ERROR] Digite uma tarefa para ser adicionada!'
  let inputTarefa = document.getElementById('inputTarefa');//Criando variável que vai pegar o id do input de tarefas  
  let tarefa = inputTarefa.value.trim()//Pegando os dados inseridos no input de tarefas e guardando seus valores na variável tarefa. Removendo os espaços em branco com o trim.
  document.getElementById('mensagem').textContent = mensagem;//Criando um document para pegar o id de mensagem e atribuindo a ele uma textContent de tarefa que vai retornar o value do input, ou seja, vai retornar o que foi escrito no input e depois passou pelo value e agora está sendo retornado aqui.
  document.getElementById('mensagemErro').textContent = ''
  mensagemErro.innerHTML= ''
  let listaTarefas = document.getElementById('listaTarefas')//Variável criada para armazenar o id e valores da ul.
  
  let novaTarefa = document.createElement('li')//Criando elemento de lista 'li' de forma dinâmica com JS.
  listaTarefas.appendChild(novaTarefa)//Indicando onde o elemnto li vai ficar. Neste caso ele vai ficar dentro de uma ul e essa ul está armazenada dentro da variável listaTarefas, portanto esta variável é o pai de li e com isso nossa li (novaTarefa) é filha de listaTarefas.
  
  novaTarefa.textContent = tarefa//Aqui estamos definindo que a novaTarefa vai receber um conteúdo de texto 'textContent' que será tarefa, ou seja vai recebr o value que for inserido no input representado pela variável 'tarefa'
  inputTarefa.value = ''//Faz com toda vez que iserirmos uma tarefa e clicar-mos, o campo do input limpa, possibilitando a inserção de novos dados.
  
  botao.style.display= 'block'
  

  if(tarefa == ''){
  let mensagemErro= '[ERROR] Digite uma tarefa para ser adicionada!'
  document.getElementById('mensagemErro').textContent = mensagemErro;

  let listaTarefas = document.getElementById('listaTarefas')
  listaTarefas.innerHTML= ''
  
  botao.style.display= 'none'
  document.getElementById('mensagem').textContent = ''
  
}
}
