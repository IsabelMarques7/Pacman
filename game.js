// Obtém a referência do elemento canvas no HTML com o id "canvas"
const canvas = document.getElementById("canvas");
// Obtém o contexto de renderização 2D do canvas para desenhar
const canvasContext = canvas.getContext("2d");
// Obtém a referência do elemento com o id "animation" (presumivelmente para animações do Pac-Man)
const pacmanFrames = document.getElementById("animation");
// Obtém a referência do elemento com o id "ghost" (presumivelmente para animações dos fantasmas)
const ghostFrames = document.getElementById("ghost");

// Função para criar um retângulo no canvas
let createRect = (x, y, width, height, color) => {
    // Define a cor de preenchimento
    canvasContext.fillStyle = color;
    // Desenha o retângulo no canvas
    canvasContext.fillRect(x, y, width, height);
};

// Define o número de quadros por segundo
let fps = 30;
// Define o tamanho de um bloco no mapa
let oneBlockSize = 20;
// Define a cor das paredes
let wallColor = "#342DCA";
let wallSpaceWidth =oneBlockSize /1.5
let wallOffset = (oneBlockSize - wallSpaceWidth) / 2
let wallInnerColor = "black"
// Mapa do jogo, onde cada número representa um tipo de bloco (1 para parede, 2 para caminho, 0 para espaços vazios)
let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1],
    [1, 1, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Função que contém o loop principal do jogo
let gameloop = () => {
    update(); // Atualiza o estado do jogo
    draw();   // Desenha o jogo no canvas
};

// Função para atualizar o estado do jogo (a ser implementada)
let update = () => {
    //todo
};

// Função para desenhar o estado do jogo (a ser implementada)
let draw = () => {
    createRect(0, 0, canvas.width, canvas.height, "black")
    drawWalls(); // Desenha as paredes
};

// Configura o intervalo do jogo para executar o gameloop a cada 1/fps segundos
let gameInterval = setInterval(gameloop, 1000 / fps);

// Função para desenhar as paredes no canvas
let drawWalls = () => {
    // Itera sobre as linhas do mapa
    for(let i = 0; i < map.length; i++){
        // Itera sobre as colunas do mapa
        for(let j = 0; j < map[0].length; j++){
            // Se o valor da célula no mapa for 1 (parede)
            if (map[i][j] == 1) {
                // Desenha um retângulo na posição correspondente no canvas
                createRect(
                    j * oneBlockSize, // Posição x do retângulo
                    i * oneBlockSize, // Posição y do retângulo
                    oneBlockSize,     // Largura do retângulo
                    oneBlockSize,     // Altura do retângulo
                    wallColor         // Cor do retângulo
                );
                if( j > 0 && map[i][j - 1] == 1){
                    createRect(
                        j * oneBlockSize,
                        i * oneBlockSize + wallOffset,
                        wallSpaceWidth + wallOffset,
                        wallSpaceWidth,
                        wallInnerColor
                    )
                }
                if(j < map[0].length - 1 && map[i][j + 1] == 1 ){
                    createRect(
                        j * oneBlockSize+ wallOffset,
                        i * oneBlockSize + wallOffset,
                        wallSpaceWidth + wallOffset,
                        wallSpaceWidth,
                        wallInnerColor
                     )
                }

                if( i > 0 && map[i - 1][j] == 1){
                    createRect(
                        j * oneBlockSize + wallOffset,
                        i * oneBlockSize,
                        wallSpaceWidth,
                        wallSpaceWidth + wallOffset,
                        wallInnerColor
                    )
                }
                if( i < map.length - 1 && map[i + 1][j] == 1 ) {
                    createRect(
                        j * oneBlockSize+ wallOffset,
                        i * oneBlockSize + wallOffset,
                        wallSpaceWidth,
                        wallSpaceWidth + wallOffset,
                        wallInnerColor
                     )
                }
            }
        }
    }
};
