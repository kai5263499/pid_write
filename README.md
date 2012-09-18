write_pid
=========

-- still in development so use at own risk.

Writes the PID to a lock file and then switches the owner of the process

I wanted to be able to use a system 5 startup script for Centos5 to control my application. I was having issues with user permissions and 
some Linux security stuff around user and program managment.  

1. Writing a PID file is only allowed by the root user
2. I want the program to run as <user> not root