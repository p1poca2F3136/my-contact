function mudarModo(modo) {
    const body = document.body;
  
    // Remover classes de outros modos
    body.classList.remove('modo-claro', 'modo-escuro', 'modo-rosa', 'modo-azulClaro', 'modo-verdeClaro');
  
    // Adicionar a classe do modo escolhido
    body.classList.add(`modo-${modo}`);
  }