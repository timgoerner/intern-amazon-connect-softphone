build: 
	docker build -f Dockerfile . -t react-nginx-ama:latest

shell: 
	docker-compose run --rm -p 4000:4000 react bash