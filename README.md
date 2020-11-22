traduzir o texto do john helenon
paralelo da web pro native
simples -> complexo
comentar sobre as alterações e reaproveitamento

lembrar disso: backgroundColor -> background-color
lembrar de explicar a `` -> tagged templated literals

focar no reutilizar código com a fontVariant

focar no problema dos condicionais

prettier - configuração do código

deixar o código comentado do isPaid para ver a evolução da estrutura

pensar nessa estrutura
const statusVariant: TCardStatusVariant = {
    PAGO: { color: 'success-400', strikeThrough: false },
    EM_ABERTO: { color: 'warning-400', strikeThrough: false },
    EM_ATRASO: { color: 'error-400', strikeThrough: false },
    REVERTIDO: { color: 'neutral-700', strikeThrough: true },
};

lembrar do desafio
caso passe um valor que não exista, como tratar?
pensar em um outro desafio para exercitar