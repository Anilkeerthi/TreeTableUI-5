/*global QUnit*/

sap.ui.define([
	"treetableui5/controller/TreeTable.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TreeTable Controller");

	QUnit.test("I should test the TreeTable controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
