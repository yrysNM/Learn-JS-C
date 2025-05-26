def log_function_call(fn):
    def wrapper(*args, **kwargs):
        print(f"Function name: {fn.__name__}")
        print(f"Function arguments: {args}, {kwargs}")
        res = fn(*args, **kwargs)
        print(f"Function result: {res}")
        return res
    return wrapper


@log_function_call
def mul(a, b):
    return a * b


print(mul(3, 4))
print("")


@log_function_call
def plus(a, b):
    return a + b


print(plus(a=3, b=4))
