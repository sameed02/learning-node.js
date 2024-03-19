#Notes

#Lec-37

Behind the scenes, nodejs has a few hacks that makes it look like a multi threaded language. It has two ways of solving a process.

1. Event loop : Smaller tasks like set timeout.
2. Worker Pool : Larger tasks like file modification.

Worker pool is totally different stuff, it uses your device's operatinng system to get the task done, So yes it DOES support multi threading.

Event Loop is a logic that runs the tasks in a loop, started by Nodejs. It has a certain order in which it executes the task.

1. Checks for the timers first : If there is a timer callback to be executed.
2. Pending callabacks : It checks other callbacks like input-output functions. If there are too many to execute, it even skips them.
3. Polling Phase : Checks for the new I/O operations to execute, if there are too many, again it skips them. Also it checks if there is any timer callback available to execute (step 1).
4. Checks Phase : it executes setImmediate() callbacks. These are the type of callbacks which are faster than setTimeout ones.
5. Close Callbacks : If we have any close event callbacks. The ones like `req.on('end', (chunk) => {})`

---

#Lec 38

to be able to use ES6 import/export do this:

It's very simple in Node.js 13 and above. You need to either:

1. Save the file with .mjs extension. OR

2. create a file package.json & add { "type": "module" }

You only need to do one of the above to be able to use Import / Export
