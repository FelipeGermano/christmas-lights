# Circle Animator

**Circle Animator** é uma aplicação desenvolvida com Electron.js que permite animar círculos coloridos em uma interface gráfica. O aplicativo inclui diversas funcionalidades configuráveis para controlar o comportamento e a aparência dos círculos animados.

## Funcionalidades

1. **Iniciar e parar a animação**:
   - O usuário pode iniciar ou parar a animação clicando no botão `Start/Stop`.

2. **Controle de intervalo de tempo**:
   - O intervalo de tempo entre as animações pode ser ajustado dinamicamente.

3. **Ajuste de intensidade**:
   - O usuário pode especificar a intensidade de iluminação dos círculos.

4. **Alteração de cores**:
   - Cada círculo pode ter sua cor personalizada por meio de seletores de cor.

5. **Ajuste de tamanho e linhas**:
   - O tamanho dos círculos e o número de linhas podem ser ajustados, com suporte para até 7 linhas.

## Requisitos do Sistema

- Node.js v14 ou superior
- npm (Node Package Manager)
- Electron.js

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/FelipeGermano/christmas-lights.git
   cd circle-animator
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o aplicativo:
   ```bash
   npm start
   ```

## Estrutura do Projeto

- `main.js`: Script principal do Electron para gerenciar a janela do aplicativo.
- `renderer.js`: Script de renderização que manipula a interface gráfica e as animações.
- `index.html`: Arquivo HTML com a estrutura da interface do usuário.
- `preload.js`: Script para comunicação entre o processo principal e o processo de renderização.
- `package.json`: Arquivo de configuração do Node.js contendo dependências e scripts.

## Como Usar

1. Execute o aplicativo com `npm start`.
2. Configure as opções disponíveis na interface:
   - **Intervalo (ms)**: Ajuste o tempo entre as animações.
   - **Intensidade (0-1)**: Defina a opacidade máxima dos círculos.
   - **Número de linhas**: Escolha entre 1 a 7 linhas de círculos.
   - **Cores**: Selecione a cor de cada círculo.
3. Clique em `Start` para iniciar a animação e `Stop` para pausar.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Autor
Felipe Rocha Germano

