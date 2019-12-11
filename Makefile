build:
	docker build -t registry.gitlab.com/tudor-pop/resume .

run:
	docker run -p 5000:5000 --rm -it --name resume registry.gitlab.com/tudor-pop/resume

push:
	docker push registry.gitlab.com/tudor-pop/resume

deploy:
	ssh home "docker pull registry.gitlab.com/tudor-pop/resume && docker run -p 5000:5000  -dit --name resume registry.gitlab.com/tudor-pop/resume"
