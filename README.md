# CNAB File Processor

## Descrição

Este projeto visa desenvolver uma aplicação web para processar arquivos CNAB contendo movimentações financeiras de várias lojas. A aplicação deve permitir o upload de arquivos CNAB, normalizar os dados, armazená-los em um banco de dados relacional e exibir as informações em uma interface web.

## Funcionalidades

- **Upload de Arquivo:** Interface para fazer o upload de arquivos CNAB.
- **Processamento de Dados:** Interpretação e normalização dos dados do arquivo CNAB.
- **Armazenamento:** Salvamento dos dados normalizados em um banco de dados relacional.
- **Exibição de Dados:** Tela com uma lista das operações importadas, com totalizador do saldo em conta por loja.
- **Autenticação:** Implementação de autenticação via OAuth.

## Estrutura do Arquivo CNAB

Os arquivos CNAB possuem o seguinte formato:

| Descrição       | Início | Fim | Tamanho | Comentário                                               |
|-----------------|--------|-----|---------|----------------------------------------------------------|
| Tipo            | 1      | 1   | 1       | Tipo da transação                                        |
| Data            | 2      | 9   | 8       | Data da ocorrência                                       |
| Valor           | 10     | 19  | 10      | Valor da movimentação (dividir por 100 para normalizar)  |
| CPF             | 20     | 30  | 11      | CPF do beneficiário                                      |
| Cartão          | 31     | 42  | 12      | Cartão utilizado na transação                            |
| Hora            | 43     | 48  | 6       | Hora da ocorrência (fuso UTC-3)                          |
| Dono da loja    | 49     | 62  | 14      | Nome do representante da loja                            |
| Nome loja       | 63     | 81  | 19      | Nome da loja                                             |

## Tipos de Transações

| Tipo | Descrição                  | Natureza | Sinal |
|------|----------------------------|----------|-------|
| 1    | Débito                     | Entrada  | +     |
| 2    | Boleto                     | Saída    | -     |
| 3    | Financiamento              | Saída    | -     |
| 4    | Crédito                    | Entrada  | +     |
| 5    | Recebimento Empréstimo     | Entrada  | +     |
| 6    | Vendas                     | Entrada  | +     |
| 7    | Recebimento TED            | Entrada  | +     |
| 8    | Recebimento DOC            | Entrada  | +     |
| 9    | Aluguel                    | Saída    | -     |

## Requisitos

- Linguagens e bibliotecas livres ou gratuitas.
- Ambiente compatível com Unix (Linux ou macOS).

## Configuração e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu_usuario/cnab-file-processor.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd cnab-file-processor
   ```
   
3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente:**
- Crie um arquivo .env baseado em .env.example.

5. **Inicie a aplicação:**
   ```bash
   npm start
   ```
