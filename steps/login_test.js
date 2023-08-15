Feature('login');

const { I, login_page } = inject()

BeforeSuite(() => {
	console.log('BeforeSuite')
});

Before(() => {
	console.log('BeforeScenario')
});

AfterSuite(() => {
	console.log('AfterSuite')
});

After(() => {
	console.log('AfterScenario')
});

Scenario('Login with sucess', ({ home_page }) => {

	I.runOnIOS(() => {
		console.log('Estou no IOS!')

	});
	I.runOnAndroid(() => {
		console.log('Estou no Android!')

	});

	login_page.doLogin('teste@teste.com', '123456')
	home_page.checkLoginSuccess();
});

Scenario('Login with error', () => {
	login_page.doLogin('xteste@teste.com', '123456')
	login_page.checkLoginError()
});