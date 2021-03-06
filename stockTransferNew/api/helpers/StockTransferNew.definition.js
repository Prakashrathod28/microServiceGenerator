var definition = {
    "_id": {
        "type": "String",
        "default": null
    },
    "sourceWarehouse": {
        "type": "String"
    },
    "destinationWarehouse": {
        "type": "String"
    },
    "approvedBy": {
        "type": "String"
    },
    "approvedOn": {
        "type": "Date"
    },
    "po_id": {
        "type": "String"
    },
    "grn_id": {
        "type": "String"
    },
    "products": [
        {
            "name": {
                "type": "String"
            },
            "mrp": {
                "type": "String"
            },
            "expiry": {
                "type": "String"
            },
            "location": {
                "type": "String"
            },
            "area": {
                "type": "String"
            },
            "rackId": {
                "type": "String"
            },
            "binId": {
                "type": "String"
            },
            "newLocation": {
                "type": "String"
            },
            "newArea": {
                "type": "String"
            },
            "newRack": {
                "type": "String"
            },
            "newBin": {
                "type": "String"
            },
            "purchaseCost": {
                "type": "String"
            },
            "saleableQty": {
                "type": "String"
            },
            "nonSaleableQty": {
                "type": "String"
            },
            "noOfQty": {
                "type": "Number"
            },
            "noOfSaleableQty": {
                "type": "Number"
            },
            "noOfNonSaleableQty": {
                "type": "Number"
            },
            "typeOfQty": {
                "type": "String"
            },
            "remarks": {
                "type": "String"
            }
        }
    ],
    "status": {
        "type": "String",
        "default": "Draft",
        "enum": [
            "Draft",
            "Pending for Approval",
            "Approved",
            "Rejected",
            "Batched",
            "Transfer Slip Generated",
            "Invoiced/Delivery Challan",
            "Shipped",
            "In Transit",
            "Delivered",
            "GRN Completed"
        ]
    },
    "deleted": {
        "type": "Boolean"
    },
    "createdBy": {
        "type": "String"
    },
    "modifiedBy": {
        "type": "String"
    },
    "createdAt": {
        "type": "Date"
    },
    "lastUpdated": {
        "type": "Date"
    }
};
module.exports.definition=definition;