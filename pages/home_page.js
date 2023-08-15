const { I } = inject();

module.exports = {

  button: {
    save: '~salvar',
  },

  fileds: {
    //code: {ios: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[1]', android: '~codigo'},
    code: '~codigo',
    name: {
      ios: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[2]',
      android: '~aluno'
    },
    search: {
      ios: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[3]',
      android: '~search'
    },
  },

  registerStudent(code, name) {
    I.fillField(this.fileds.code, code)
    I.fillField(this.fileds.name, name)
    I.tap(this.button.save)
  },

  searchStudent(search, check) {
    I.fillField(this.fileds.search, search)
    I.runOnIOS(() => {
      I.seeElement('(//XCUIElementTypeOther[@name="' + check + '"])[2]')
    })

    I.runOnAndroid(() => {
      I.seeElement('//android.view.ViewGroup[@content-desc="' + check + '"]/android.widget.TextView')
      //I.waitForText(check)
    })

  },

  checkLoginSuccess() {
    I.waitForElement(this.button.save, 5)
    I.seeElement(this.button.save)
  }
}
