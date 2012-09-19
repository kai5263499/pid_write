var Fs = require('fs');

/**
 *  Writes the PID for the application to the lock file and then switches the
 *  user from root to noschema. This is because the application has to start
 *  as root in order to write the PID
 * 
 */
exports.pid_write = function(pid_file, process_name, cb){
    var pid = process.pid;
    // Write the file synchronously so that the program does not execute anything
    // until the PID and GUID are set.
    Fs.writeFileSync(pid_file, pid, 'utf8');
    // Must happen first because you cannot change group as a user other than root
    process.setgid(process_name);
    // Now change the user
    process.setuid(process_name);
    cb(null, pid);
    
}    
