pid_write
=========

Install: npm install pid_write

-- still in development so use at own risk.

Writes the PID to a lock file and then switches the owner of the process

I wanted to be able to use a system 5 startup script for Centos5 to control my application. I was having issues with user permissions and 
some Linux security stuff around user and program managment.  

1. Writing a PID file is only allowed by the root user
2. I want the program to run as <user> not root

Usage example:
```javascript
var Pw = require('pid_write');
Pw.pid_write('/var/lock/subsys/<pidfilename>', '<process_name>', function(err, pid){
    if(err){
        console.log('[ERROR]', {
            'msg' : 'Could not create PID so exiting', 
            'err' : err
        });
        process.exit(1);
    }
});
```

ToDo:

1. Find a way to have the pid file name and user given in the startup script
    and write_pid() to be sourced from one location

