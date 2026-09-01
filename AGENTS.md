# Base44 development notes

- The imported repository initially contained only a `README` with `Hello World!`; `server.js` provides the minimal preview page.
- Start with `docker compose -f docker-compose.base44.yml up -d`.
- Verify locally with `curl -fsS http://localhost:3000/` and externally with a non-localhost `Host` header.
- The Node process uses watch mode and the repository is bind-mounted, so source edits restart the server automatically.
