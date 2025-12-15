# REST API Design Notes

## What REST Means in This System
REST is used to expose file resources through standard HTTP methods.
Clients interact with the backend using stateless requests.

## Resources
- /files

## HTTP Methods
- POST /files → create a file resource
- GET /files/{id} → retrieve file metadata (future)

## Key REST Principles Applied
- Resource-oriented URLs
- Use of HTTP verbs
- Stateless request handling
- Clear request/response contracts

## Why REST Fits This System
REST simplifies client-server communication and allows the backend
to scale independently of clients.
