// Copyright (c) 2022, Sione Taumoepeau & Nau Hoi Taumoepeau and contributors
// For license information, please see license.txt

frappe.ui.form.on('TVET Savea', {

	e_2: function(frm){

		const E2_list = ["Student full time","Student part-time",
		"Home duties","Retired/ too old","None: no work, no gardening"]

		if (E2_list.includes(frm.doc.e_2)){
			frm.set_value("end_of_survey", "THANK YOU THAT THE END OF THE SURVEY")
		}
	//	alert(frm.doc.e_2)
	//	console.log(frm.e_2)
	}
});
