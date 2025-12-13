# Design Decisions – Client–Server

## Decision
Use a client–server architecture instead of embedding logic on the client.

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

