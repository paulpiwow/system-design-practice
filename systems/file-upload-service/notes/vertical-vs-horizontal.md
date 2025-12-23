# Vertical vs Horizontal Scaling

## Vertical Scaling
Increasing the resources of a single server instance.
Simple but limited by hardware and creates a single point of failure.

## Horizontal Scaling
Running multiple identical server instances and distributing traffic.
More complex but enables higher throughput and fault tolerance.

## Application in File Upload Service
The backend was designed to be stateless so multiple instances can
run concurrently and handle requests independently.

## Design Implication
This prepares the system to sit behind a load balancer in production.
