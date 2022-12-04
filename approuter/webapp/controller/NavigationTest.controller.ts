import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import Model from "sap/ui/model/Model";

/**
 * @namespace com.simpre.MOP.controller
 */
export default class NavigationTest extends BaseController {
	private formatter = formatter;

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

}