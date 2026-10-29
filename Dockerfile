FROM nginx:alpine

# Only public frontend assets belong in the web root. Do not COPY the repository
# wholesale: that can expose source, workflow files, local configuration or secrets.
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js
COPY images/ /usr/share/nginx/html/images/

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD ["wget", "--quiet", "--tries=1", "--spider", "http://127.0.0.1/"]
