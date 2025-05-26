class User:
    def __init__(self, username: str, email: str):
        self.username = username
        self.email = email


class Post:
    def __init__(self,  title: str, content: str, author: User) -> None:
        self.title = title
        self.content = content
        self.author = author


class Form:
    def __init__(self):
        self.users = []
        self.posts = []

    def register_user(self, username: str, email: str):
        user = User(username, email)
        self.users.append(user)
        return user

    def create_post(self, title: str, content: str, author: User):
        post = Post(title, content, author)
        self.posts.append(post)
        return post

    def find_user_by_username(self, username: str):
        for user in self.users:
            if (user.username == username):
                return user

    def find_user_by_email(self, email: str):
        for user in self.users:
            if (user.email == email):
                return user

    def find_posts_by_author(self, author: User):
        return list(filter(lambda post: post.author == author,  self.posts))


form = Form()
alice = form.register_user("Alice", 'alice.@gmail.com')
cat = form.register_user("Cat", 'cat.@gmail.com')

form.create_post("Test", 'test content', alice)
form.create_post("Test1", 'test content1', alice)

# print(form.find_user_by_username('Cat'))

alice_posts = form.find_posts_by_author(alice)
print([post.title for post in alice_posts])
