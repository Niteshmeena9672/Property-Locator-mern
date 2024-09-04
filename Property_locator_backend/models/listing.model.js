import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    regularPrice: {
      type: Number,
      required: false,
    },
    discountPrice: {
      type: Number,
      required: false,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: false,
    },
    furnished: {
      type: Boolean,
      required: false,
    },
    parking: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    offer: {
      type: Boolean,
      required: false,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
