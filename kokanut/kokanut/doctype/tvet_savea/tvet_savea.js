// Copyright (c) 2022, Sione Taumoepeau & Nau Hoi Taumoepeau and contributors
// For license information, please see license.txt

frappe.ui.form.on('TVET Savea', {

	refresh: function(frm){

		frm.set_query("village", function() {
			return {
				"filters": { "island": ["=", frm.doc.region]}
			};
		});

		frm.set_query("distric", function() {
			return {
				"filters": { "island": ["=", frm.doc.region]}
			};
			console.log(frm.doc.region)
		});


	},

	onload: function(frm){

		display_e6(frm);
	},

	e_2: function(frm){

		display_e6(frm);

		const E2List_2 = ["Student full time","Student part-time",
			"Home duties","Retired/ too old","None: no work, no gardening"]

		if (E2List_2.includes(frm.doc.e_2)){
			frm.set_value("end_of_survey", "THANK YOU THAT THE END OF THE SURVEY. PLEASE COMPLETE THE FEEDBACK BEFORE YOU LEAVE")
		} else
		{
			frm.set_value("end_of_survey", " ")
		}
		
	}
});
var display_e6 = function(frm){

	const E2List_1 = ["Employer","Producing goods or services for sale/ Running a business",
			"Employee working for wages in the public sector","Employee working for wages for a private sector",
			"Producing goods or services for own/family consumption","Unpaid family worker (family business, plantation)",
			"Unpaid family worker (helps with essential household duties)", "Voluntary work/community work (for free)"]
	
	if (frm.doc.e_2){
		if (E2List_1.includes(frm.doc.e_2)){
			frm.set_df_property("e6", "hidden", 0);
		} else {
			frm.set_df_property("e6", "hidden", 1);
		}
	} else {
		frm.set_df_property("e6", "hidden", 1);
	}
}