FROM nginx:alpine

COPY ./startup-page /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
