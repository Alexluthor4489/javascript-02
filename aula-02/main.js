function adicionarTarefa() {
    //let mensagem = "Tarefa adicionada com sucesso!";
    let inputTarefa = document.getElementById('inputTarefa');   
    let tarefa = inputTarefa.value
    document.getElementById('mensagem').textContent = tarefa;
    
    inputTarefa.value = ''
  }