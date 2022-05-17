build:
	docker build -t ghcr.io/tudor-pop/v4 .

login:
	export CR_PAT=
	echo $CR_PAT | docker login ghcr.io -u tudor-pop --password-stdin

run:
	docker run -p 5000:5000  -dit --name v4 ghcr.io/tudor-pop/v4

push:
	docker push ghcr.io/tudor-pop/v4

pull:
	docker pull ghcr.io/tudor-pop/v4

deploy: build push
	ssh home "docker pull ghcr.io/tudor-pop/v4 && docker rm -f resume && docker run -p 5000:5000  -dit --name resume ghcr.io/tudor-pop/v4"
