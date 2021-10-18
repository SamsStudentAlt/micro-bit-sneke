def on_button_pressed_a():
    Snake_Head.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def AppleYummie():
    global score, FRUIT
    if FRUIT.is_touching(Snake_Head):
        score += 1
        FRUIT.delete()
        FRUIT = game.create_sprite(randint(0, 4), randint(0, 4))

def on_button_pressed_b():
    Snake_Head.turn(Direction.RIGHT, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

def CheckDeathCollisions():
    if True:
        pass
    elif False:
        pass
def mewhenmoving():
    if True:
        pass
    elif False:
        pass
    else:
        Snake_Head.move(1)
FRUIT: game.LedSprite = None
Snake_Head: game.LedSprite = None
score = 0
Snake_Head = game.create_sprite(2, 2)
FRUIT = game.create_sprite(randint(0, 4), randint(0, 4))
while True:
    basic.pause(1000)
AppleYummie()
if True:
    pass
else:
    game.game_over()
basic.pause(1000)

def on_forever():
    pass
basic.forever(on_forever)
