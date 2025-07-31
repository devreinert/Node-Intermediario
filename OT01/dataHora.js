const agora = new Date();

const opcoesDeFormatacao = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Sao_Paulo'
  };

  const imprimeData = agora.toLocaleString('pr-BR', opcoesDeFormatacao);

  console.log(`A data e horário exato é: ${imprimeData}`);