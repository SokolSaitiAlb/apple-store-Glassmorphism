​🍏 Apple & JBL Premium Glassmorphism Store v2.0
​Kjo platformë e-commerce "High-End" nuk është thjesht një projekt UI/UX; është një ekosistem i plotë Full-Stack Microservices i ndërtuar për performancë maksimale, siguri dhe shkallëzim (scalability). Ky version shënon tranzicionin nga një prototip statik në një infrastrukturë të mirëfilltë DevOps.
​🏗️ Arkitektura e Sistemit (Microservices)
​Sistemi funksionon si një bashkësi shërbimesh të izoluara në kontejnerë, duke garantuar stabilitet dhe pavarësi teknologjike.

graph TD
    Client[🌐 Browser] -->|Port 80| Nginx[🛡️ Nginx Reverse Proxy]
    Nginx -->|Shërben Faqen| Frontend[🎨 Frontend Glassmorphism]
    Nginx -->|Drejton API| FastAPI[⚡ FastAPI Backend]
    FastAPI -->|Lexon/Shkruan| Postgres[(🐘 PostgreSQL DB)]
    FastAPI -->|Përshpejton me Cache| Redis[(🚀 Redis Cache)]
    Admin -->|Monitoron| Portainer[🐳 Portainer GUI]

    ⛓️ Pipeline & CI/CD (GitOps)
​Procesi i dërgimit të kodit ndjek standardet më të larta të automatizimit:

graph LR
  A[💻 Sokol Code] -->|Git Push| B(GitHub)
  B -->|GitHub Actions| C{🔍 Lint & Security Test}
  C -->|Pass| E(🐳 Docker Hub / Local Build)
  E -->|Deploy| F[🚀 Production Server]

  🚀 Risitë e Versionit 2.0 (The Next Level)
​Dynamic Inventory: Produktet nuk janë më statike. Çdo iPhone 17 Pro dhe M5 Chip vjen direkt nga PostgreSQL.
​Ultra-Fast Performance: Implementimi i Redis Caching minimizon vonesat (latency) duke shërbyer kërkesat e shpeshta rrufe.
​Reverse Proxy Management: Nginx tashmë menaxhon SSL-in, sigurinë dhe ndarjen e trafikut mes Frontend-it dhe Backend-it.
​Centralized Monitoring: Integrimi i Portainer lejon kontrollin vizual të kontejnerëve në kohë reale.
​Modern UI: Përmirësimi i efektit Glassmorphism dhe një Sidebar dinamik me transparencë të lartë.

​🛠 Stiva Teknologjike (Tech Stack)

Kategoria Teknologjia Roli
Frontend HTML5, CSS3 (Glassmorphism), JS (ES6+) UI/UX & Dynamic Fetching
API Backend Python (FastAPI) Logjika, Validimi & Performance
Database PostgreSQL 15 (Alpine) Ruajtja e të dhënave të strukturuara
Caching Redis (Alpine) Shpejtësi ekstreme për kërkesat API
Orchestration Docker & Docker Compose Izolimi dhe menaxhimi i shërbimeve
Security Nginx & Cloudflare (Strict SSL) Siguria e trafikut dhe Reverse Proxy

🐳 Operacionet me Docker
​Për të nisur të gjithë ekosistemin (Postgres, Redis, Backend, Nginx, Portainer) me një komandë të vetme:

# Nisja e të gjithë infrastrukturës
docker-compose up -d --build

# Monitorimi i logjeve
docker-compose logs -f

​👨‍💻 Zhvilluar nga
​Sokol Saiti – Aspirant DevOps & Software Engineer
I fokusuar në optimizimin e sistemeve Linux (CachyOS), arkitekturat e performancës së lartë dhe automatizimin DevOps.
