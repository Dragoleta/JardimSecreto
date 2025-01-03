FROM python:3.13-slim

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY . /app

WORKDIR /app

RUN uv sync --frozen --no-cache

# RUN uv run uvicorn src.main:app
# CMD ["uv", "run", "uvicorn","src.main:app"]
