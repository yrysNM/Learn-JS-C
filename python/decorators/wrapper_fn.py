def decorator_function(original_fn):
    def wrapper_function(*args, **kwargs):
        print("Executed before function")
        res = original_fn(*args, **kwargs)
        print("Executed after function")

        return res

    return wrapper_function


@decorator_function
def hello_world(a, b):
    print("Hello world")
    return a + b


print(hello_world(3, 4))
