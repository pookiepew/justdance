# ImageCollection internal service

## The use case for this service

- Will provide images for client

## Mananger:

- Will check DB if any new images needs to be downloaded
- Will notify the workers if new images are downloaded

## Worker:

- Will download new images from the manager
- Will supply images to client
- Will be on all worker nodes in docker swarm for high availability
