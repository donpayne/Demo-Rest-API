# Demo REST API framework
---

This is a Node.js application written on Express to interface as a readonly REST API for a MongoDB backend.

## express-restify-mongoose

Run the application.  The default port is set to 3000.  The root path for the REST API is http://host:port/api:

[http://hostname:3000/api/v1](http://hostname:3000/api/v1)

Resources are found by their collection names:

[http://hostname:3000/api/v1/users](http://hostname:3000/api/v1/users)

Searching may be accomplished via query strings:

[http://hostname:3000/api/v1/users?active=True](http://hostname:3000/api/v1/users?active=True)
