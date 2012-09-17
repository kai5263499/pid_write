var Fs = require('fs');

/**
 *  Writes the PID for the application to the lock file and then switches the
 *  user from root to noschema. This is because the application has to start
 *  as root in order to write the PID
 * 
 */
exports.write_pid = function(){
    var pid_file = '/var/lock/subsys/noschema_cp';
    var pid = process.pid;
    Fs.writeFile(pid_file, pid, function(err){
        if(err){
            Logger.log({
                'log':'info', 
                'msg' : 'Could not write PID',
                'pid' : pid,
                'pid_file': pid_file,
                'error': err
            });
        } 
        
        process.setuid('noschema');
        
    });
       
}    
