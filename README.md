🍏 Apple & JBL Premium Glassmorphism Store
Kjo është një platformë e-commerce "High-End" e ndërtuar me fokus në UI/UX moderne (Glassmorphism) dhe Infrastrukturë DevOps.
⛓️ Pipeline Arkitektura (GitOps)
graph LR
  A[Sokol Code] -->|Git Push| B(GitHub)
  B -->|GitHub Actions| C{Lint Test}
  C -->|Pass| D(Netlify CI/CD)
  C -->|Build| E(Docker Image)
  D -->|Deploy| F[Live Website]

🚀 Detajet e Deployment
🔍 Risitë e Versionit 2.0:
 * Next-Gen Catalog: Përfshirja e modeleve iPhone 17 Pro dhe M5 Chips.
 * Dynamic Sidebar: Meny anësore me efekt transparencë (Glassmorphism).
 * Internal Image Hosting: Të gjitha imazhet janë optimizuar dhe zhvendosur në /images.
🛠 Teknologjitë e Përdorura
| Kategoria | Teknologjia |
|---|---|
| Frontend | HTML5, CSS3, JS (ES6+) |
| Data | JSON (Static API) |
| Infrastructure | Docker (Nginx Alpine) |
| Deployment | Netlify (CI/CD) |
🐳 Operacionet me Docker
Përdorni këto komanda për të nisur mjedisin e izoluar:
# Build
docker build -t apple-glass-store .

# Run
docker run -d -p 8080:80 apple-glass-store

👨‍💻 Zhvilluar nga: Sokol Saiti – Aspirant DevOps & Software Engineer
