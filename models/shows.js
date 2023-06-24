const { Schema, model } = require("mongoose");

const showsSchema = new Schema({
  id: {
    type: Number,
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
  },
  language: {
    type: String,
    trim: true,
    required: true,
  },
  genres: {
    type: Array,
    trim: true,
    required: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  },
  runtime: {
    type: Number,
    trim: true,
    required: true,
  },
  premiered: {
    type: String,
    trim: true,
    required: true,
  },
  officialSite: {
    type: String,
    trim: true,
    required: true,
  },
  schedule: {
    type: String,
    trim: true,
    required: true,
    days: {
      time: String,
      days: Array,
    },
  },
  rating: {
    type: Object,
    trim: true,
    required: true,
    average: {
      type: Number,
    },
  },
  weight: {
    type: Number,
    trim: true,
    required: true,
  },
  network: {
    type: Object,
    trim: true,
    required: true,
    id: {
      type: Number,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    country: {
      type: Object,
      trim: true,
      required: true,
      name: {
        type: String,
        trim: true,
        required: true,
      },
      code: {
        type: String,
        trim: true,
        required: true,
      },
      timezone: {
        type: String,
        trim: true,
        required: true,
      },
    },
  },
  webChannel: {
    type: String,
    trim: true,
    required: true,
  },
  externals: {
    type: Object,
    trim: true,
    required: true,
    tvrage: {
      type: Number,
      trim: true,
      required: true,
    },
    thetvdb: {
      type: Number,
      trim: true,
      required: true,
    },
    imdb: {
      type: String,
      trim: true,
      required: true,
    },
  },
  image: {
    type: Object,
    trim: true,
    required: true,
    medium: {
      type: String,
      trim: true,
      required: true,
    },
    original: {
      type: String,
      trim: true,
      required: true,
    },
  },
  summary: {
    type: String,
    trim: true,
    required: true,
  },
  summary: {
    type: Number,
    trim: true,
    required: true,
  },
  _links: {
    type: Object,
    trim: true,
    required: true,
    self: {
      type: Object,
      trim: true,
      required: true,
      href: {
        type: String,
        trim: true,
        required: true,
      },
    },
    previousepisode: {
      type: Object,
      trim: true,
      required: true,
      href: {
        type: String,
        trim: true,
        required: true,
      },
    },
  },
});
module.exports = model("Shows", showsSchema);
