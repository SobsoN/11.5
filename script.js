/*var person = {
	name: "Jan",
	sayHello: function() {
		console.log("Hello "  + this.name + "!");
    }
}
var hello = person.sayHello();
hello;
*/

$(document).ready(function(){

	function Button(text) {
        this.text = text || 'Hello';
    }

    Button.prototype = {
    	create: function() {
    		const self = this;
    		this.$element = $('<button>');
    		this.$element.text(this.text);
    		this.$element.on('click', function() {
    			alert(self.text);
    		});
    		$('body').append(this.$element);
    	}
    }

    const btn1 = new Button("Hello!"),
    btn2 = new Button("Welcome on my website");
    btn1.create();
    btn2.create();

});