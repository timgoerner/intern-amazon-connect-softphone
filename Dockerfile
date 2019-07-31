FROM ubuntu:14.04
MAINTAINER vaya
VOLUME ["/usr/src/"]

EXPOSE 80 443 3000

# Add repositories
RUN apt-get update && apt-get install -y software-properties-common \
	&& add-apt-repository -y ppa:chris-lea/node.js \
	&& apt-add-repository -y ppa:nginx/stable

## Install wget
RUN apt-get install -y wget

# install Make	
RUN apt-get install -y make

## Install LogDNA
RUN echo "deb http://repo.logdna.com stable main" | tee /etc/apt/sources.list.d/logdna.list \
	&& wget -O- https://s3.amazonaws.com/repo.logdna.com/logdna.gpg | apt-key add - \
	&& apt-get update \
	&& apt-get install -y logdna-agent < "/dev/null"

## Install Nodejs with NPM
RUN apt-get -y install nodejs \
	&& npm cache clean -f \
	&& npm install -g n \
	&& n stable 

## Install Create React and Forever
RUN npm install -g create-react-app \
	&& npm install forever -g 

## Install Nginx
RUN apt-get install -y nginx \
	&& rm -rf /var/lib/apt/lists/*

ADD nginx/nginx.conf /etc/nginx/nginx.conf
ADD nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
ADD scripts/start.sh /scripts/start.sh

#ADD data/www /data/www

RUN rm /etc/nginx/sites-enabled/default

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

CMD ["bash","/scripts/start.sh"]