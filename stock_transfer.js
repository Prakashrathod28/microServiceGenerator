{
    _id: { type: String }, // Transfer ID
    sourceWarehouse: { type: String }, // ID for reference to the source warehouse
    destinationWarehouse: { type: String }, // ID for reference to the destination warehouse
    approvedBy: { type: String },
    approvedOn: { type: Date },
    po_id: {type: String, required: false}, // On approval of Stock Transfer
    grn_id: {type: String, required: false}, // On approval of Stock Transfer
    products: [{
        name: { type: String },
        mrp: { type: String },
        expiry: { type: String },
		location: { type: String },
		area: { type: String },
		rackId: { type: String },
		binId: { type: String },
		newLocation: { type: String },
		newArea: { type: String },
		newRack: { type: String },
		newBin: { type: String },
        purchaseCost: { type: String },
        saleableQty: { type: String },
        nonSaleableQty: { type: String },
        noOfQty: { type: Number },
        noOfSaleableQty: { type: Number }, // If saleable qty
        noOfNonSaleableQty: {type: Number}, // If non-saleable qty
        typeOfQty: {type: String}, //Dropdown - Saleable, Non-saleable, Both
        remarks: {type: String},
    }],
    status: { type: String, enum: ["Draft", "Pending for Approval", "Approved", "Rejected", "Batched", "Transfer Slip Generated", "Invoiced/Delivery Challan", "Shipped", "In Transit", "Delivered", "GRN Completed"], default: "Draft"}, // On creation of Stock Transfer, status is set as Draft
    deleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: String
    },
    modifiedBy: {
        type: String
    },
    createdAt: {
        type: Date
    },
    lastUpdated: {
        type: Date
    }
}