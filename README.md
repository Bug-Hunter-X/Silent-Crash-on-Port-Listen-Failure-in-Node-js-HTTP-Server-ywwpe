# Silent Crash on Port Listen Failure in Node.js HTTP Server

This repository demonstrates a common, yet easily overlooked, error in Node.js server development: the lack of error handling when listening on a port.  The provided code creates a simple HTTP server, but omits crucial error handling, leading to a silent crash if the port is already in use or another issue prevents binding.

## The Bug

The `bug.js` file contains a basic HTTP server.  However, if you run this and the port 8080 is already in use, the server will crash without any indication of what went wrong.  This makes debugging and deployment problematic.

## The Solution

`bugSolution.js` shows the corrected code.  It includes an `error` event listener on the server object, which catches potential errors during the `listen` call. This provides informative error messages, allowing for better diagnostics and handling.