# class Image:
#     def __init__(self, resolution, title, extension):
#         self.resolution = resolution
#         self.title = title
#         self.extension = extension

#     def resize(self, resolution):
#         self.resolution = resolution

#     # @override
#     def __str__(self) -> str:
#         return self.title + "." + self.extension


# img = Image("1920x1200", 'TITLE', 'jpg')
# img.resize('1400x980')

# print(img.resolution)
# print(img)

class Comment:
    def __init__(self, text) -> None:
        self.text = text
        self.votes_qty = 0

    def upvote(self):
        self.votes_qty += 1

    def __add__(self, other):
        return (f"{self.text} {other.text}", self.votes_qty + other.votes_qty)

    def __eq__(self, value: object, /) -> bool:
        return self.text == value.text and self.votes_qty == value.votes_qty


fcm = Comment('First comment')
scm = Comment('First comment')

fcm.upvote()
# scm.upvote()
scm.upvote()

# print(dir(Comment))
print(fcm + scm)
print(fcm == scm)
