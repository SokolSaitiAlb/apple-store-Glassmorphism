#!/bin/bash

# Ngjyrat për terminal (për dukje profesionale)
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Duke nisur procesin e Deployment për Apple Store...${NC}"

# 1. Pastrimi i container-ave të vjetër nëse ekzistojnë
echo -e "${BLUE}🧹 Duke pastruar mjedisin e vjetër...${NC}"
docker stop apple-store-container 2>/dev/null
docker rm apple-store-container 2>/dev/null

# 2. Build i imazhit të Docker
echo -e "${BLUE}📦 Duke ndërtuar Docker Image (Nginx Alpine)...${NC}"
docker build -t apple-glass-store .

# 3. Nisja e container-it të ri
echo -e "${BLUE}🚢 Duke nisur container-in në portin 8080...${NC}"
docker run -d --name apple-store-container -p 8080:80 apple-glass-store

echo -e "${GREEN}✅ Deployment u krye me sukses!${NC}"
echo -e "${GREEN}🌍 Faqja është live në: http://localhost:8080${NC}"
