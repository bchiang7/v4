build:
	docker build -t registry.gitlab.com/tudor-pop/resume .

run:
	docker-compose up

push:
	docker-compose push tudor-pop

deploy: build push
	ssh home "docker pull registry.gitlab.com/tudor-pop/resume && docker rm -f resume && docker run -p 5000:5000  -dit --name resume registry.gitlab.com/tudor-pop/resume"
