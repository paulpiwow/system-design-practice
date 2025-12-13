# File Upload Service – Client–Server Architecture

## Overview
This system allows users to upload files through a web client, which are
handled by a backend server responsible for processing and storage.

## Architecture
- Client: Web browser or frontend application
- Server: Backend API handling requests
- Communication: HTTP request-response

## Request Flow
1. Client sends an HTTP request with file metadata
2. Server validates the request
3. Server processes or stores the file
4. Server responds with success or error

## Why Client–Server?
- Separation of concerns
- Centralized logic and security
- Enables independent scaling of client and server

## Prototype Validation

A minimal Node.js + Express prototype was implemented to validate
client–server communication via HTTP.

This confirms:
- Separation of client and server responsibilities
- Stateless request handling
- Centralized backend logic
