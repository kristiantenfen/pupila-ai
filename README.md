

## 📋 Visão Geral
Sistema gerador de histórias que utiliza IA generativa (Claude) para criar narrativas personalizadas baseadas em respostas do usuário. O sistema faz 5 perguntas e gera uma história única incorporando todas as respostas.


## 🚀 Início Rápido

### Pré-requisitos
```bash
# Python 3.7+
python --version

# Instalar dependências
pip install anthropic requests
```

### Estrutura do Projeto
```
story_generator/
├── src/
│   ├── domain/
│   │   ├── __init__.py
│   │   └── entities.py
│   ├── application/
│   │   ├── __init__.py
│   │   └── story_service.py
│   ├── infrastructure/
│   │   ├── __init__.py
│   │   └── claude_client.py
│   └── interfaces/
│       ├── __init__.py
│       └── console.py
├── config.py
└── main.py
```


### Configuração

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/story_generator.git
```

2. Crie um arquivo `config.py` e adicione a chave da API do Claude:
```python
CLAUDE_API_KEY = "sua-chave-da-api-do-claude"
```

3. Execute o projeto:
```bash
python main.py
```


## 🔧 Requisitos Técnicos

### Ambiente de Desenvolvimento

- Python 3.7 ou superior
- Pip (gerenciador de pacotes Python)
- Sistema operacional: Windows, Linux ou MacOS
- IDE ou editor de texto de preferência


### Dependências
```bash
pip install anthropic
pip install requests
```
## 🔐 Segurança e Autenticação

- Token de API do Claude válido e ativo
- Token armazenado em arquivo de configuração
- Não requer autenticação do usuário final

## 💻 Interface e Uso

- Interface de console para interação com o usuário
- Respostas do usuário são coletadas e enviadas para a API do Claude
- História gerada é exibida no console


## 🗃️ Dados

- Não há persistência de dados
- Todas as respostas são descartadas após a geração da história


## 🌐 Integração com Claude

- API do Claude para geração de histórias
- Utilização da biblioteca `anthropic` para interação com a API
- Respostas são enviadas como mensagens para o Claude
- História gerada é recebida como resposta da API
- Limite de tokens adequado para histórias
- Tempo de resposta esperado < 5 segundos

## ⚠️ Tratamento de Erros
```python
try:
    # Execução do programa
    console.run()
except Exception as e:
    print(f"Erro fatal: {str(e)}")
```

## 🔄 Fluxo de Execução

1. Inicialização do projeto
2. Coleta de respostas do usuário
3. Envio das respostas para a API do Claude
4. Recebimento e exibição da história gerada
5. Tratamento de erros e exceções


## 📈 Métricas de Sucesso

- Histórias geradas com sucesso
- Tempo de resposta médio < 10 segundos
- Uso adequado do limite de tokens da API do Claude
- Feedback positivo do usuário


## ⚖️ Limitações Conhecidas

- Limite de tokens da API do Claude
- Dependência de uma conexão com a internet para funcionar
- Dependência de uma chave de API do Claude para funcionar
- Sem interface gráfica
- Sem persistência de dados
- Sem autenticação do usuário
- Sem feedback do usuário
- Sem tratamento de erros específicos
- Sem testes unitários
- Sem testes de integração
- Sem testes de aceitação
- Sem testes de usabilidade
- Sem testes de segurança
- Sem testes de desempenho
- Sem testes de carga
- Sem testes de stress
- Sem testes de segurança


## 🚀 Melhorias Futuras

- Adicionar testes unitários
- Adicionar testes de integração
- Adicionar testes de aceitação
- Adicionar testes de usabilidade
- Adicionar testes de segurança
- Adicionar testes de desempenho
- Adicionar testes de carga
- Adicionar testes de stress
- Adicionar testes de segurança
- Adicionar persistência de dados
- Adicionar autenticação do usuário
- Adicionar feedback do usuário
- Adicionar tratamento de erros específicos
- Adicionar interface gráfica
- Adicionar testes de segurança
- Adicionar testes de desempenho
- Adicionar testes de carga
- Adicionar testes de stress
- Adicionar testes de segurança


## 📝 Licença

Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

## 📧 Contato
Seu Nome - kristian.tenfen@gmail.com
Link do Projeto: https://github.com/kristiantenfen/pupila-ai