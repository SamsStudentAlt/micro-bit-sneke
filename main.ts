function GrowthAndOrientation () {
    if (true) {
    	
    }
    for (let index = 0; index < game.score(); index++) {
        if (SnakeDirection == 0) {
            if (Snake_Head.get(LedSpriteProperty.X) - SnakeBodyScore != 0) {
                SnakeBits = game.createSprite(Snake_Head.get(LedSpriteProperty.X) - 1, Snake_Head.get(LedSpriteProperty.Y))
            } else {
                if (DirectionArray[1] == 90 && Snake_Head.get(LedSpriteProperty.Y) - SnakeBodyScore != 0) {
                	
                } else if (false) {
                	
                } else {
                	
                }
            }
        }
        SnakeBodyScore += -1
        looptimes += 1
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
    DirectionArray.unshift(SnakeDirection)
    if (DirectionArray.length > 4) {
        DirectionArray.pop()
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
    DirectionArray.unshift(SnakeDirection)
    if (DirectionArray.length > 4) {
        DirectionArray.pop()
    }
})
let FRUIT: game.LedSprite = null
let FruitY = 0
let FruitX = 0
let SnakeBits: game.LedSprite = null
let SnakeBodyScore = 0
let yes = false
let Snake_Head: game.LedSprite = null
let SnakeDirection = 0
let SnakeBody = 0
let DirectionArray: number[] = []
let looptimes = 0
game.setScore(0)
music.setBuiltInSpeakerEnabled(true)
music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Forever)
let ABAbility = true
while (true) {
    DirectionArray = []
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
