import './style.css'
// se inicializa el canvas, se le da un tamaño y se escala, intentar moverlo a otro archivo
const canvas = document.getElementById('canvas')
const contextCanvas = canvas.getContext('2d')

const blockSize = 24
const boardWidth = 16
const boardHeight = 24

canvas.width = blockSize * boardWidth
canvas.height = blockSize * boardHeight

contextCanvas.scale(blockSize, blockSize)

// el tablero se puede hacer con un array de arrays, refactorizar porq esto asi es feo
/*
const boardTable = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // fila 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
]
*/
const boardTable = Array.from({ length: boardHeight }, () =>
  new Array(boardWidth).fill(0)
)
// pieza

const piece = {
  position: { x: 5, y: 5 },
  shape: [
    [1, 1],
    [1, 1]
  ]
}

// piezas random
const PIECES = [
  [[1, 1],
    [1, 1]],
  [[1, 1, 1, 1]],
  [[0, 1, 0],
    [1, 1, 1]],
  [[1, 1, 0],
    [0, 1, 1]],
  [[0, 1, 1],
    [1, 1, 0]],
  [[1, 0, 0],
    [1, 1, 1]]
]

// para los juegos se usa game loop
let dropCounter = 0
let lastTime = 0
function update (time = 0) {
  const deltaTime = time - lastTime
  lastTime = time

  dropCounter += deltaTime

  if (dropCounter > 1000) {
    movePieceDown()
    dropCounter = 0
    if (checkCollision()) {
      console.log('colision abajo')
      piece.position.y -= 1
      solidifyPiece()
      removeRows()
    }
  }
  draw()
  window.requestAnimationFrame(update)
}

function draw () {
  contextCanvas.fillStyle = '#000'
  contextCanvas.fillRect(0, 0, canvas.width, canvas.height)

  boardTable.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      if (value === 1) {
        contextCanvas.fillStyle = 'blue'
        contextCanvas.fillRect(columnIndex, rowIndex, 1, 1)
      }
    })
  })

  piece.shape.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      if (value === 1) {
        contextCanvas.fillStyle = 'red'
        contextCanvas.fillRect(
          piece.position.x + columnIndex,
          piece.position.y + rowIndex,
          1,
          1
        )
      }
    })
  })
}

// para cambiar la posicion de la pieza

window.addEventListener('keydown', rotatePiece)

function rotatePiece (event) {
  if (event.key === 'ArrowLeft') {
    movePieceLeft()
    if (checkCollision()) {
      console.log('colision izquierda')
      movePieceRight()
    }
  }
  if (event.key === 'ArrowRight') {
    movePieceRight()
    if (checkCollision()) {
      console.log('colision derecha')
      movePieceLeft()
    }
  }
  if (event.key === 'ArrowDown') {
    movePieceDown()
    if (checkCollision()) {
      console.log('colision abajo')
      piece.position.y -= 1
      solidifyPiece()
      removeRows()
    }
  }

  if (event.key === 'ArrowUp') {
    let previousPiece
    rotateOwnPiece()
    if (checkCollision()) {
      console.log('colision arriba')
      rotateOwnPiece()
    }
  }
}
function movePieceDown () {
  piece.position.y += 1
}
function movePieceLeft () {
  piece.position.x -= 1
}
function movePieceRight () {
  piece.position.x += 1
}

function rotateOwnPiece () {
  const rotatedPiece = piece.shape.map((row, rowIndex) => {
    return row.map((value, columnIndex) => {
      return piece.shape[piece.shape.length - 1 - columnIndex][rowIndex]
    })
  })
  piece.shape = rotatedPiece
}

function previosPiece () {

}
function checkCollision () {
  return piece.shape.find((row, rowIndex) => {
    return row.find((value, columnIndex) => {
      if (value !== 0) {
        const boardX = piece.position.x + columnIndex
        const boardY = piece.position.y + rowIndex

        // Verifica colisiones con los bordes del tablero
        if (boardX < 0 || boardX >= boardWidth || boardY >= boardHeight) {
          return true
        }

        // Verifica colisiones con bloques existentes en el tablero
        if (boardTable[boardY][boardX] !== 0) {
          return true
        }
      }
      return false
    })
  })
}

function solidifyPiece () {
  piece.shape.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      // si el valor es 1, se agrega al tablero
      if (value !== 0) {
        const boardX = piece.position.x + columnIndex
        const boardY = piece.position.y + rowIndex
        boardTable[boardY][boardX] = value
      }
    })
  })

  piece.position.y = 0
  piece.position.x = Math.floor(boardWidth / 2) - 1 // Posición inicial en el centro del tablero

  // se genera una nueva pieza
  piece.shape = PIECES[Math.floor(Math.random() * PIECES.length)]
  if (checkCollision()) {
    window.alert('Game Over')
    // se reinicia todo el tablero
    boardTable.forEach((row, rowIndex) => {
      row.forEach((value, columnIndex) => {
        boardTable[rowIndex][columnIndex] = 0
      })
    })
  }
}

function removeRows () {
  const rowsToRemove = []
  boardTable.forEach((row, rowIndex) => {
    if (row.every(value => value === 1)) {
      rowsToRemove.push(rowIndex)
    }
  })
  rowsToRemove.forEach(rowIndex => {
    boardTable.splice(rowIndex, 1)
    boardTable.unshift(new Array(boardWidth).fill(0))
  })
}

update()
