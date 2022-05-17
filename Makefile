build:
	docker build -t ghcr.io/tudor-pop/v4 .

run:
	docker-compose up

push:
	docker-compose push tudor-pop

deploy: build push
	ssh home "docker pull ghcr.io/tudor-pop/v4 && docker rm -f resume && docker run -p 5000:5000  -dit --name resume registry.gitlab.com/tudor-pop/v4"
