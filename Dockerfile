FROM nginx:1.14.2-alpine
RUN rm -rf /etc/nginx/conf.d
COPY nginx-conf /etc/nginx
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
