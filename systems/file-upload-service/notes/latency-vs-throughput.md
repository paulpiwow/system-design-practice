# Latency vs Throughput

## Definition
Latency measures how long a single request takes, while throughput
measures how many requests the system can handle over time.

## Application in File Upload Service
File uploads are latency-sensitive for users but throughput-sensitive
for backend processing.

## Design Decision
The system responds immediately to upload requests to minimize latency,
while heavier processing is handled asynchronously to maximize throughput.

## Impact
- Users receive fast feedback
- System can handle higher load
- Backend processing scales independently
