function GrowthAndOrientation () {
    if (0 < SnakeBody) {
        SnakeBits.delete()
    }
    for (let index = 0; index < SnakeBody; index++) {
        count = 0
        if (SnakeDirection == 0) {
            SnakeBits = game.createSprite(Snake_Head.get(LedSpriteProperty.X) - count, Snake_Head.get(LedSpriteProperty.X))
        } else if (SnakeDirection == 90) {
            SnakeBits = game.createSprite(Snake_Head.get(LedSpriteProperty.X) + count, Snake_Head.get(LedSpriteProperty.X))
        } else if (SnakeDirection == 180) {
            SnakeBits = game.createSprite(Snake_Head.get(LedSpriteProperty.X), Snake_Head.get(LedSpriteProperty.X) + count)
        } else if (SnakeDirection == 270) {
            SnakeBits = game.createSprite(Snake_Head.get(LedSpriteProperty.X), Snake_Head.get(LedSpriteProperty.X) - count)
        }
    }
}
function betterSpawing () {
    while (true) {
        FruitX = randint(0, 4)
        FruitY = randint(0, 4)
        if (FruitX == Snake_Head.get(LedSpriteProperty.X) && FruitY == Snake_Head.get(LedSpriteProperty.Y)) {
            continue;
        } else {
            FRUIT = game.createSprite(FruitX, FruitY)
            break;
        }
    }
}
function MoveOrDie () {
    if (Snake_Head.get(LedSpriteProperty.X) == 0 && SnakeDirection == 180) {
        Death()
    } else if (Snake_Head.get(LedSpriteProperty.X) == 4 && SnakeDirection == 0) {
        Death()
    } else if (Snake_Head.get(LedSpriteProperty.Y) == 0 && SnakeDirection == 90) {
        Death()
    } else if (Snake_Head.get(LedSpriteProperty.Y) == 4 && SnakeDirection == 270) {
        Death()
    } else {
        Snake_Head.move(1)
        GrowthAndOrientation()
    }
}
input.onButtonPressed(Button.A, function () {
    Snake_Head.turn(Direction.Left, 90)
    SnakeDirection += 90
    if (SnakeDirection == 360) {
        SnakeDirection = 0
    }
})
function AppleYummie () {
    if (FRUIT.isTouching(Snake_Head)) {
        FRUIT.delete()
        betterSpawing()
        soundExpression.spring.play()
        game.addScore(1)
        SnakeBody += 1
    }
}
function Death () {
    let I_T = 0
    music.stopMelody(MelodyStopOptions.All)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    if (I_T) {
        control.reset()
    } else {
        game.gameOver()
    }
}
input.onButtonPressed(Button.B, function () {
    Snake_Head.turn(Direction.Right, 90)
    SnakeDirection += -90
    if (SnakeDirection < 0) {
        SnakeDirection = 270
    }
})
let FRUIT: game.LedSprite = null
let FruitY = 0
let FruitX = 0
let count = 0
let SnakeBits: game.LedSprite = null
let yes = false
let Snake_Head: game.LedSprite = null
let SnakeDirection = 0
let SnakeBody = 0
game.setScore(0)
music.setBuiltInSpeakerEnabled(true)
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
let ABAbility = true
while (true) {
    SnakeBody = 0
    SnakeDirection = 0
    Snake_Head = game.createSprite(0, 0)
    betterSpawing()
    while (true) {
        if (yes) {
            yes = false
            break;
        }
        if (SnakeDirection == 360) {
            SnakeDirection = 0
        }
        basic.pause(1000)
        MoveOrDie()
        AppleYummie()
    }
}
basic.forever(function () {
	
})
