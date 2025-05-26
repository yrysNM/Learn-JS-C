class Comment:
    def __init__(self, text, initial_votes_qty=0):
        self.text = text
        self.votes_qty = initial_votes_qty

    def upvotoe(self, qty):
        self.votes_qty = qty

    def reset_votes_qty(self):
        self.votes_qty = 0
