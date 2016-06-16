var Callbacky = require('../src/main');

describe('Callback test -', function () {

	var fakeMethods;

	beforeEach(function(){
		Callbacky.init();
		fakeMethods = {
			alert: function(value) {},
			info: function(value) {}
		};
		spyOn(fakeMethods, 'alert');
		spyOn(fakeMethods, 'info');
	});

	afterEach(function(){
		Callbacky.cleanAll();
	})

	it('if bind a function with a key and trigger the same key, then that function is called', function(){
		Callbacky.bind('methodOne', function(){ fakeMethods.alert('hello') });
		Callbacky.trigger('methodOne');
		expect(fakeMethods.alert).toHaveBeenCalledWith('hello');
	});

	it('if bind a function with a key and trigger the same key with args, then that function is called with args', function(){
		Callbacky.bind('methodOne', function(val){ fakeMethods.alert(val) });
		Callbacky.trigger('methodOne', 'world');
		expect(fakeMethods.alert).toHaveBeenCalledWith('world');
	});

	it('if bind many function with a key and trigger the same key, then these functions are called', function(){
		Callbacky.bind('methodOne', function(){ fakeMethods.alert('hello') });
		Callbacky.bind('methodOne', function(){ fakeMethods.info('world') });
		Callbacky.trigger('methodOne');
		expect(fakeMethods.alert).toHaveBeenCalledWith('hello');
		expect(fakeMethods.info).toHaveBeenCalledWith('world');
	});

	it('if bind a function with a key, clean that key and trigger the same key, then that functions is not called', function(){
		Callbacky.bind('methodOne', function(){ fakeMethods.alert('hello') });
		Callbacky.clean('methodOne');
		Callbacky.trigger('methodOne');
		expect(fakeMethods.alert.calls.count()).toEqual(0);
	});

	it('if bind a function with a key, clean all and trigger the same key, then that functions is not called', function(){
		Callbacky.bind('methodOne', function(){ fakeMethods.alert('hello') });
		Callbacky.cleanAll();
		Callbacky.trigger('methodOne');
		expect(fakeMethods.alert).not.toHaveBeenCalled();
	});
})