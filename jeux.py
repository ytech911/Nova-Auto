import tkinter as tk
import random

WIDTH, HEIGHT = 400, 400
SQUARE_SIZE = 50

class ClickGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Clic sur le carré !")
        self.canvas = tk.Canvas(root, width=WIDTH, height=HEIGHT, bg="#222")
        self.canvas.pack()
        self.score = 0
        self.square = None
        self.score_text = self.canvas.create_text(WIDTH//2, 20, text="Score : 0", fill="white", font=("Arial", 16))
        self.spawn_square()
        self.canvas.bind("<Button-1>", self.check_click)

    def spawn_square(self):
        if self.square:
            self.canvas.delete(self.square)
        x = random.randint(0, WIDTH - SQUARE_SIZE)
        y = random.randint(40, HEIGHT - SQUARE_SIZE)
        self.square = self.canvas.create_rectangle(x, y, x+SQUARE_SIZE, y+SQUARE_SIZE, fill="#e74c3c", outline="")
        self.square_pos = (x, y, x+SQUARE_SIZE, y+SQUARE_SIZE)

    def check_click(self, event):
        x1, y1, x2, y2 = self.square_pos
        if x1 <= event.x <= x2 and y1 <= event.y <= y2:
            self.score += 1
            self.canvas.itemconfig(self.score_text, text=f"Score : {self.score}")
            self.spawn_square()

if __name__ == "__main__":
    root = tk.Tk()
    ClickGame(root)
    root.mainloop()