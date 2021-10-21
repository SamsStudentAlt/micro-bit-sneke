def GrowthAndOrientation():
    global SnakeBits, SnakeBodyScore, looptimes
    for index in range(game.score()):
        if SnakeDirection == 0:
            if Snake_Head.get(LedSpriteProperty.X) - SnakeBodyScore != 0:
                SnakeBits = game.create_sprite(Snake_Head.get(LedSpriteProperty.X) - 1,
                    Snake_Head.get(LedSpriteProperty.Y))
            else:
                if DirectionArray[1] == 90 and Snake_Head.get(LedSpriteProperty.Y) - SnakeBodyScore != 0:
                    pass
                elif False:
                    pass
                else:
                    pass
        SnakeBodyScore += -1
        looptimes += 1
def betterSpawing():
    global FruitX, FruitY, FRUIT
    while True:
        FruitX = randint(0, 4)
        FruitY = randint(0, 4)
        if FruitX == Snake_Head.get(LedSpriteProperty.X) and FruitY == Snake_Head.get(LedSpriteProperty.Y):
            continue
        else:
            FRUIT = game.create_sprite(FruitX, FruitY)
            break
def MoveOrDie():
    if Snake_Head.get(LedSpriteProperty.X) == 0 and SnakeDirection == 180:
        Death()
    elif Snake_Head.get(LedSpriteProperty.X) == 4 and SnakeDirection == 0:
        Death()
    elif Snake_Head.get(LedSpriteProperty.Y) == 0 and SnakeDirection == 90:
        Death()
    elif Snake_Head.get(LedSpriteProperty.Y) == 4 and SnakeDirection == 270:
        Death()
    else:
        Snake_Head.move(1)
        GrowthAndOrientation()

def on_button_pressed_a():
    global SnakeDirection
    Snake_Head.turn(Direction.LEFT, 90)
    SnakeDirection += 90
    if SnakeDirection == 360:
        SnakeDirection = 0
    DirectionArray.unshift(SnakeDirection)
    if len(DirectionArray) > 4:
        DirectionArray.pop()
input.on_button_pressed(Button.A, on_button_pressed_a)

def AppleYummie():
    global SnakeBody
    if FRUIT.is_touching(Snake_Head):
        FRUIT.delete()
        betterSpawing()
        soundExpression.spring.play()
        game.add_score(1)
        SnakeBody += 1
def Death():
    I_T = 0
    music.stop_melody(MelodyStopOptions.ALL)
    music.start_melody(music.built_in_melody(Melodies.WAWAWAWAA),
        MelodyOptions.ONCE)
    if I_T:
        control.reset()
    else:
        game.game_over()

def on_button_pressed_b():
    global SnakeDirection
    Snake_Head.turn(Direction.RIGHT, 90)
    SnakeDirection += -90
    if SnakeDirection < 0:
        SnakeDirection = 270
    DirectionArray.unshift(SnakeDirection)
    if len(DirectionArray) > 4:
        DirectionArray.pop()
input.on_button_pressed(Button.B, on_button_pressed_b)

FRUIT: game.LedSprite = None
FruitY = 0
FruitX = 0
SnakeBits: game.LedSprite = None
SnakeBodyScore = 0
yes = False
Snake_Head: game.LedSprite = None
SnakeDirection = 0
SnakeBody = 0
DirectionArray: List[number] = []
looptimes = 0
game.set_score(0)
music.set_built_in_speaker_enabled(True)
music.start_melody(music.built_in_melody(Melodies.CHASE), MelodyOptions.FOREVER)
ABAbility = True
while True:
    DirectionArray = []
    SnakeBody = 0
    SnakeDirection = 0
    Snake_Head = game.create_sprite(0, 0)
    betterSpawing()
    while True:
        if yes:
            yes = False
            break
        if SnakeDirection == 360:
            SnakeDirection = 0
        basic.pause(1000)
        MoveOrDie()
        AppleYummie()

def on_forever():
    pass
basic.forever(on_forever)
