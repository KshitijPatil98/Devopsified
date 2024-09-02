docker build -f Dockerfile_Multistage -t kshitij98/devopsify:1.0.0 .
docker run --name simple-node-app -p 3000:3000 -d kshitij98/devopsify
