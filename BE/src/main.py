from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def main():
    return "Fastapi ok"


if __name__ == "__main__":
    main()
