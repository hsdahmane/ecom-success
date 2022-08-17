FROM nginx
COPY dist/ecom-success /usr/share/nginx/html
COPY conf/main.conf /etc/nginx/conf.d
