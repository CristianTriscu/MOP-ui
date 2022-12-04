sap.ui.define(["sap/m/MessageBox", "./BaseController", "../model/formatter"], function (MessageBox, __BaseController, __formatter) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const formatter = _interopRequireDefault(__formatter);
  /**
   * @namespace com.triscu.mop.controller
   */
  const Main = BaseController.extend("com.triscu.mop.controller.Main", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.formatter = formatter;
    },
    sayHello: function _sayHello() {
      MessageBox.show("Hello World!");
    },
    pressTile: function _pressTile(oEvent) {
      //const i18n: Model = this.getView().getModel("i18n");

      // const scheduleJobs:unknown = i18n.getProperty("ScheduleJobs");
      // const systemConfiguration:unknown = i18n.getProperty("SystemsConfiguration");
      // const jobsConfiguration:unknown = i18n.getProperty("JobConfiguration");
      const sHeaderName = oEvent.getSource().getHeader();
      if (sHeaderName === "navigationTest") {
        this.navTo("NavigationTest", {});
      }
    }
  });
  return Main;
});