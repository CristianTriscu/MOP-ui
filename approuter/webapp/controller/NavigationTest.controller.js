sap.ui.define(["sap/m/MessageBox", "./BaseController", "../model/formatter"], function (MessageBox, __BaseController, __formatter) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const formatter = _interopRequireDefault(__formatter);
  /**
   * @namespace com.simpre.MOP.controller
   */
  const NavigationTest = BaseController.extend("com.simpre.MOP.controller.NavigationTest", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.formatter = formatter;
    },
    sayHello: function _sayHello() {
      MessageBox.show("Hello World!");
    }
  });
  return NavigationTest;
});