# Apple Store — Glassmorphism Demo

A small Albanian-language storefront prototype with static frontend assets and a FastAPI demo backend. The repository includes a Docker Compose development stack with Nginx and PostgreSQL.

## Implemented today

- Static HTML/CSS/JavaScript storefront.
- FastAPI endpoints: /api/health and /api/products.
- Nginx serves frontend assets and reverse-proxies /api/ to FastAPI.
- Compose defines PostgreSQL for development; the current /api/products endpoint still returns hard-coded sample data and does not yet read or write PostgreSQL.
- GitHub Actions compiles the backend, tests real HTTP endpoints, validates Compose, builds the stack and checks frontend/API responses through Nginx.

Redis caching and Portainer are not currently part of the Compose stack. SSL termination, Cloudflare and a production deployment pipeline are also not configured here.

## Safe local setup

Docker Compose reads the local .env file. It is ignored by Git; do not commit real secrets.

```bash
cp .env.example .env
sed -i "s/^POSTGRES_PASSWORD=.*/POSTGRES_PASSWORD=$(openssl rand -hex 32)/" .env
chmod 600 .env
docker compose config --quiet
docker compose up --build -d
```

Open the local frontend at http://127.0.0.1:8080. The port binds to localhost by default, not every network interface.

Check services and logs:

```bash
docker compose ps
docker compose logs --follow
```

Stop the stack:

```bash
docker compose down
```

The PostgreSQL data directory is ./data/db; back it up before removing or migrating data. The sample database password is local-only and must be unique. Do not publish .env, database dumps or production credentials.

## Architecture

```text
Browser -> Nginx (127.0.0.1:8080)
                 |-- static HTML/CSS/JS
                 `-- /api/* -> FastAPI backend
                                  |
                         PostgreSQL service
                         (configured, not yet
                          used by current API)
```

The root Dockerfile copies only public frontend assets into Nginx. The backend runs as a non-root user in its own image. CI runs smoke tests against the actual backend and Compose stack; it fails when an endpoint or image build fails.

## Next engineering step

Implement a real SQLAlchemy model/session, health-check database connectivity, and tests covering CRUD and migrations before describing the API as database-backed or production-ready.

## Author

Sokol Saiti — Linux, web development and DevOps learning projects.
