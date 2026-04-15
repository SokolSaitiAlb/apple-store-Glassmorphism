# Përdorim një version të lehtë të Python
FROM python:3.11-slim

# Vendosim direktorinë e punës brenda kontejnerit
WORKDIR /app

# Kopjojmë listën e librarive
COPY requirements.txt .

# Instalojmë libraritë pa mbajtur cache (për të kursyer hapësirë)
RUN pip install --no-cache-dir -r requirements.txt

# Kopjojmë të gjithë kodin e backend-it
COPY . .

# Hapim portën 8000
EXPOSE 8000

# Komanda për të nisur serverin FastAPI
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
