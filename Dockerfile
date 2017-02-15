From hub.c.163.com/public/nginx:1.2.1
RUN rm -v /etc/nginx/nginx.conf

ADD nginx.conf /etc/nginx/

RUN echo "daemon off;" >> /etc/nginx/nginx.conf

RUN mkdir -p /usr/src/node-app
RUN mkdir -p /usr/src/node-app/dist
WORKDIR /usr/src/node-app

COPY dist/. /usr/src/node-app/dist/

EXPOSE 22 80 443

ENTRYPOINT /etc/init.d/nginx start && /usr/sbin/sshd -D