
describe('Test login and register a lost item', function() {

	var scrollIntoView = function (element) {
		arguments[0].scrollIntoView();
	};

	it('test login', function() {

		//browser.get('http://isis-t21.isis.airnz.co.nz:8080/lfp-web/');
		browser.get('http://localhost:4736/#/');

		element(by.css('a.link')).click();

		browser.driver.findElement(by.id('IDToken1')).sendKeys('tanj2');
		browser.driver.findElement(by.id('IDToken2')).sendKeys('Password1');
		browser.driver.findElement(by.css('input[value="Log In"]')).click();

		browser.waitForAngular();

		element(by.css('a[aria-label="Register a new lost property"]')).click();

		browser.waitForAngular();

		element(by.id('firstName')).sendKeys('Owen');
		element(by.id('lastName')).sendKeys('Goodman');
		element(by.id('lostDate input')).sendKeys('03/03/2016'); //wenbo to create a help function to generate yesterday value in correct format;
		element(by.id('countryCode')).click();
		element(by.id('select_option_109')).click(); // you might need to remember the value of what is 109, so in the next page you can verify it.
		element(by.id('phoneNumber')).sendKeys('12345');
		element(by.id('emailAddress')).sendKeys('tester@gmail.com');


		var portElement = element(by.id('port'));
		browser.executeScript(scrollIntoView, portElement.getWebElement());
		portElement.click();
		element(by.id('select_option_398')).click();

		browser.waitForAngular();

		var categoryElement = element(by.id('category'));
		browser.executeScript(scrollIntoView, categoryElement.getWebElement());
		categoryElement.click();
		element(by.id('select_option_477')).click();

		browser.waitForAngular();

		element(by.id('description')).sendKeys('some description');

		browser.waitForAngular();

		var submitButtonElement = element(by.css('button[aria-label="Submit"]'));
		browser.executeScript(scrollIntoView, submitButtonElement.getWebElement());
		submitButtonElement.click();

		browser.waitForAngular();

		var customerName = element(by.id('customerName')).getText();
		expect(customerName).toEqual('Owen, Mr Goodman');

		browser.waitForAngular();

	});


	it('test details', function() {

		browser.get('http://localhost:4736/#/');

		browser.waitForAngular();
		var list = element.all(by.css('tr'));
		var firstInTheList = list.get(1);
		firstInTheList.click();
		browser.waitForAngular();



	});
});