const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  // image: {
  //   filename: {
  //     type: String,
  //     default: "listingimage" 
  //   },
  //   url: {
  //     type: String,
  //     default: "https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     set: (v) => v === "" ? "https://images.unsplash.com/photo-1761839258753-85d8eecbbc29?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
  //   }
  // },
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number]
    }
  },
  category: {
    type: String,
    enum: ["mountains", "arctic", "beach", "caves", "castles", "iconic cities", "farms", "lake", "camping", "amazing views", "trending", "rooms", "treehouses", "amazing pools"]
  }
});

listingSchema.post("findOneAndDelete", async function (listing) {
  if (listing) {
    await Review.deleteMany({
      _id: { $in: listing.reviews }
    })
  }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

