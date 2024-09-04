# Wähle ein Basisimage
FROM nginx:alpine

# Kopiere deine Anwendung in den Nginx-Webserver
COPY . /usr/share/nginx/html

# Exponiere den Port
EXPOSE 80

# Starte Nginx
CMD ["nginx", "-g", "daemon off;"]