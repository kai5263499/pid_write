write_pid
=========

-- still in development so use at own risk.

Writes the PID to a lock file and then switches the owner of the process

I wanted to be able to use a system 5 startup script for Centos5 to control my application. I was having issues with user permissions and 
some Linux security stuff around user and program managment.  

1. Writing a PID file is only allowed by the root user
2. I want the program to run as <user> not root

Usage example:

var Wp = require(__dirname + '/libs/' + 'write_pid/write_pid');
Wp.write_pid('/var/lock/subsys/noschema_cp', 'noschema', function(err, pid){
    if(err){
        console.log('[ERROR]', {
            'msg' : 'Could not create PID so exiting', 
            'err' : err
        });
        process.exit(1);
    }
});


ToDo:

1. Possibly make this synchronous or give the option to be synchronous. 
2. Find a way to have the pid file name and user given in the startup script
    and write_pid() to be sourced from one location

