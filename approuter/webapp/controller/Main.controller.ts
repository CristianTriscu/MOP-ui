import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";

/**
 * @namespace com.triscu.mop.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

	public pressTile(oEvent: Event): void {

		//const i18n: Model = this.getView().getModel("i18n");

		// const scheduleJobs:unknown = i18n.getProperty("ScheduleJobs");
		// const systemConfiguration:unknown = i18n.getProperty("SystemsConfiguration");
		// const jobsConfiguration:unknown = i18n.getProperty("JobConfiguration");
		const sHeaderName: string = oEvent.getSource().getHeader();
		if (sHeaderName === "navigationTest") {
			this.navTo("NavigationTest", {});
		} 
	}

}
