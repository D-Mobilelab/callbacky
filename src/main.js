/**
 * @ngdoc object
 * @name Callbacky
 *
 * @description
 * Callbacky is a Javascript event handler that allows multiple parts of an application communicate with each other
 *
 * <i>You have to call <b>{@link Callbacky#methods_init init}</b> before all other methods.</i>
 */
var Callbacky = new function(){

    var events = {};
    var logger = { 
        debug: function(){},
        log: function(){},
        info: function(){},
        warn: function(){},
        error: function(){}
    };

    /**
     * @ngdoc function
     * @name Callbacky#init
     * @methodOf Callbacky
     *
     * @description 
     * This method is used to initialize the Callbacky module.
     *
     * @param {Object} options configuration object
     * @param {Logger} [options.logger={debug:function(){},log:function(){},info:function(){},warn:function(){},error:function(){}}] any object containing the following methods: debug, log, info, warn, error
     * 
     * @example
     * <pre>
     *   Callbacky.init({
     *       logger: console
     *   });
     * </pre>
     */
    this.init = function(options){
        logger.log('Callbacky', 'init', options);

        if (options && options.logger){
            logger = options.logger;
        }
    };

    /**
     * @ngdoc function
     * @name Callbacky#bind
     * @methodOf Callbacky
     *
     * @description 
     * Bind a callback to an event, associated to a string. <br/>
     * When you call {@link Callbacky#methods_trigger trigger} method with same string, the callback will be called. <br/>
     * <i>You can associate two or more callbacks on a event</i>
     *
     * @param {string} key key to identify the event
     * @param {method} method callback will be called when trigger same key
     * 
     * @example
     * <pre>
     * Callbacky.bind('eventName', function(args){ 
     *     console.log(args)) 
     * };
     *
     * Callbacky.trigger('eventName', 'world');
     * // IT EXECUTES: console.log('world');
     * </pre>
     */
    this.bind = function(key, callback){
        logger.log('Callbacky', 'bind', key, callback);

        if(!events[key]){ 
            events[key] = [];
        }
        events[key].push(callback);
    };

    /**
     * @ngdoc function
     * @name Callbacky#trigger
     * @methodOf Callbacky
     *
     * @description 
     * Trigger an event, binded before with {@link Callbacky#methods_bind bind} method, and call the callbacks associated to event
     *
     * @param {string} key key to identify the event
     * @param {Object} [arguments=undefined] arguments to pass to associated callbacks
     * 
     * @example
     * <pre>
     * Callbacky.bind('eventName', function(args){ 
     *     console.log(args)) 
     * };
     *
     * Callbacky.trigger('eventName', 'world');
     * // IT EXECUTES: console.log('world');
     * </pre>
     */
    this.trigger = function(key, arg){
        logger.log('Callbacky', 'trigger', key, arg);

        if(events[key] && events[key].length > 0){
            for(var i = 0; i < events[key].length; i++){
                events[key][i].call(this, arg);
            }
        } else {
            logger.warn('Callbacky', 'trigger', 'no callback associated with the event ' + key);
        }        
    };

    /**
     * @ngdoc function
     * @name Callbacky#clean
     * @methodOf Callbacky
     *
     * @description 
     * Clean all callbacks associated to an event
     *
     * @param {string} key key to identify the event
     * 
     * @example
     * <pre>
     * Callbacky.bind('eventName', function(args){ 
     *     console.log(args)) 
     * };
     *
     * Callbacky.clean('eventName');
     *
     * Callbacky.trigger('eventName', 'world');
     * // It does nothing
     * </pre>
     */
    this.clean = function(key){
        logger.log('Callbacky', 'clean', key);

        if(events[key] && events[key].length !== 0){
            events[key] = [];
        } else {
            logger.warn('Callbacky', 'clean', 'no callback associated with the event ' + key);
        }
    };

    /**
     * @ngdoc function
     * @name Callbacky#cleanAll
     * @methodOf Callbacky
     *
     * @description 
     * Clean all callbacks associated to all events
     * 
     * @example
     * <pre>
     * Callbacky.bind('eventName', function(args){ 
     *     console.log(args)) 
     * };
     *
     * Callbacky.cleanAll();
     *
     * Callbacky.trigger('eventName', 'world');
     * // It does nothing
     * </pre>
     */
    this.cleanAll = function(){
        logger.log('Callbacky', 'cleanAll');

        events = {};
    };

};

module.exports = Callbacky;