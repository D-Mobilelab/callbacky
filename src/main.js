var Callbacky = new function(){

    var events = [];
    var logger = { 
        debug: function(){},
        log: function(){},
        info: function(){},
        warn: function(){},
        error: function(){}
    };

    this.init = function(options){
        if (options && options.logger){
            logger = options.logger;
        }

        logger.log('Callbacky', 'init', options);
    };

    this.bind = function(key, callback){
        if(!events[key]){ 
            events[key] = [];
        }
        events[key].push(callback);
        logger.log('Callbacky', 'bind', key, callback);
    };

    this.trigger = function(key, arg){
        logger.log('Callbacky', 'trigger', key, arg);
        if(events[key] && events[key].length > 0){
            for(var i = 0; i < events[key].length; i++){
                events[key][i].call(this, arg);
            }
        }        
    };

    this.clean = function(key){
        if(events[key]){
            events[key] = [];
        }

        logger.log('Callbacky', 'clean', key);
    };

    this.cleanAll = function(){
        events = [];
        logger.log('Callbacky', 'cleanAll');
    };

};

module.exports = Callbacky;