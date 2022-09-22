// Copyright (c) 2022, Sione Taumoepeau & Nau Hoi Taumoepeau and contributors
// For license information, please see license.txt

frappe.ui.form.on('Search for Household', {

	onload: function(frm){

		frm.doc.set_value("household_id"," ");
		frappe.ui.toolbar.clear_cache();
	},

	refresh: function(frm){

		$('.primary-action').prop('hidden', true);
		$('.btn-default').prop('hidden', true);

		frm.set_query("household_id", "household_members", function(){

			return {
				query: "kokanut.api.get_members_info",
				filters: {"relationship" : "Head"}
			}

		});

		frm.add_custom_button(__('Edit'), () => {
			frappe.route_options = {
				"household_id": frm.doc.household_id,
					}
				frappe.set_route("Form", 'TVET Savea', frm.doc.household_id);
			}).addClass("btn-primary");
		
		frm.add_custom_button("Refresh", () => { 
			return frappe.ui.toolbar.clear_cache();		
		}).addClass("btn-primary");
		
	},


	household_id : function(frm){

		let household_id = frm.doc.household_id;

		if(household_id){
			frappe.call({
				method: "kokanut.api.get_members",
				args : { household_id : frm.doc.household_id 
					
				},
				callback: function(r) {
					if (r.message) {				
						var item_row = frm.set_value("household_members", [])
						$.each(r.message, function(i, item) {
							item_row = frm.add_child("household_members")
							console.log(item)
							item_row.item = item.item_code,
							item_row.full_name = item.full_name,
							item_row.relationship = item.relationship,
							item_row.gender = item.gender
							item_row.age = item.age
							refresh_field('household_members')
						});
			
					}
				}
			});
		}
	}
});