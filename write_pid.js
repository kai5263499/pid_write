var Fs = require('fs');

/**
 *  Writes the PID for the application to the lock file and then switches the
 *  user from root to noschema. This is because the application has to start
 *  as root in order to write the PID
 * 
 */
exports.write_pid = function(pid_file, process_name, cb){
    var pid = process.pid;
    /*
     * Write the PID to the pid_file
     */
    Fs.writeFileync(pid_file, pid, function(err){
        if(err){
            cb(err);
        } else {
            /*
             * Update the process owner
             */
            process.setuid(process_name);
            cb(null, pid);
        }
    });
}    
