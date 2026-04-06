## ⛓️ Pipeline Arkitektura (GitOps)

```mermaid
graph LR
  A[Sokol (Code)] -->|Git Push| B(GitHub)
  B -->|GitHub Actions| C{Lint Test}
  C -->|Pass| D(Netlify CI/CD)
  C -->|Build| E(Docker Image)
  D -->|Deploy| F[Live Website]


Deployment":
🔍 Risitë e Versionit 2.0:
Next-Gen Catalog: Përfshirja e modeleve iPhone 17 Pro dhe M5 Chips.
Dynamic Sidebar: Meny anësore me efekt transparencë (Glassmorphism) për navigim të shpejtë sipas kategorive.
Internal Image Hosting: Të gjitha imazhet janë zhvendosur në /images për të siguruar pavarësi nga serverat e jashtëm.

 🍏 Apple & JBL Premium Glassmorphism Store
Kjo është një platformë e-commerce "High-End" e ndërtuar me fokus në UI/UX moderne (Glassmorphism) dhe Infrastrukturë DevOps. Projekti shërben si një "Technical Showcase" për implementimin e teknologjive cloud-native dhe automatizimit.
🚀 Karakteristikat Teknike
 * UI/UX: Dizajn i bazuar në Glassmorphism me efekte 3D dhe prapavija dinamike.
 * Data-Driven: Ndarje e plotë e të dhënave nga logjika përmes arkitekturës JSON-based.
 * Responsive Grid: Layout i optimizuar me CSS Grid (minmax) për performancë maksimale në mobile dhe desktop.
 * Filtering Logic: Sistem filtrimi dinamik i produkteve (iPhone, MacBook, Audio) përmes JavaScript asinkron.
 * Containerized: I gatshëm për deployment në çdo mjedis përmes Docker (Nginx Alpine).
🛠 Teknologjitë e Përdorura
| Kategoria | Teknologjia |
|---|---|
| Frontend | HTML5, CSS3 (Advanced Grid & Glassmorphism), JS (ES6+) |
| Data | JSON (Static API Simulation) |
| Infrastructure | Docker (Nginx Alpine) |
| Deployment | Netlify (CI/CD Pipeline) |
🐳 Si ta nisni projektin me Docker
Për të siguruar që mjedisi i zhvillimit është i njëjtë me atë të prodhimit, përdorni komandat e mëposhtme:
 * Build imazhin:
   docker build -t apple-glass-store .

 * Run container-in:
   docker run -d -p 8080:80 apple-glass-store

   Faqja do të jetë e qasshme në: http://localhost:8080
📈 CI/CD Flow
Projekti ndjek parimet e GitOps:
 * Çdo push në branch-in main aktivizon një build automatik në Netlify.
 * Sistemi kontrollon integritetin e skedarit products.json.
 * Faqja përditësohet live pa pasur nevojë për ndërhyrje manuale.

👨‍💻 Zhvilluar nga
Sokol Saiti – Aspirant DevOps & Software Engineer
Qëllimi: Inovacion përmes automatizimit dhe kodit të pastër.

 

