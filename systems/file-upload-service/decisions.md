# Design Decisions

## Decision: Use a client–server architecture instead of embedding logic on the client.

## Benefits
- Centralized validation and business logic
- Easier updates and maintenance
- Improved security

## Trade-offs
- Server becomes a bottleneck at scale
- Requires scaling strategies (load balancing)

## Future Considerations
- Add load balancer as traffic increases
- Make server stateless for horizontal scaling

## Decision: Use RESTful APIs for Client–Server Communication

### Context
The system requires a clear and scalable way for clients to interact
with backend services over HTTP.

### Decision
Adopt a RESTful API design where backend functionality is exposed
through resource-based endpoints using standard HTTP methods.

### Rationale
- REST provides a well-understood, stateless communication model
- Resource-based URLs make the system easier to reason about and extend
- HTTP verbs and status codes provide built-in semantics
- Compatible with common infrastructure such as load balancers,
  API gateways, and caching layers

### Trade-offs
- Less flexible than GraphQL for complex queries
- Requires careful versioning as the API evolves

### Alternatives Considered
- RPC-style endpoints
- GraphQL
- gRPC (better suited for internal service-to-service communication)

## Decision: Separate Latency-Sensitive and Throughput-Sensitive Work

### Context
File uploads require fast client responses while supporting high volumes
of backend processing.

### Decision
Respond immediately to client requests while deferring heavy processing
to background execution.

### Rationale
- Improves perceived performance (low latency)
- Enables higher throughput under load
- Prevents clients from blocking on long-running tasks

### Trade-offs
- Increased system complexity
- Requires background processing infrastructure at scale
