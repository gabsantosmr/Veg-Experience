document.getElementById('buttonsearch').addEventListener('click', () => {
    const query = document.getElementById('input_search').value.trim();
    const resultsContainer = document.getElementById('results-container');
  
    if (query) {
      resultsContainer.innerHTML = `<p>Resultados para: <strong>${query}</strong></p>`;
    } else {
      resultsContainer.innerHTML = '<p>Por favor, insira um termo de pesquisa.</p>';
    }
  });
  