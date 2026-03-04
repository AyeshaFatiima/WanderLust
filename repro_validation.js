const { listingSchema } = require("./schema.js");

const mockBody = {
    listing: {
        title: "Test Listing",
        description: "Test Description",
        location: "Test Location",
        country: "Test Country",
        price: 1000,
        image: {
            url: "https://example.com/image.jpg"
        }
    }
};

const { error } = listingSchema.validate(mockBody);
if (error) {
    console.log("Validation FAILED:", error.details[0].message);
} else {
    console.log("Validation PASSED");
}
