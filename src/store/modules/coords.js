const state = {
  coords: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          bearing: 31,
          type: "Point",
          coordinates: [18.5008116, -33.876115],
        },
        properties: {
          title: "Location",
          description: "ZA",
        },
      },
      {
        type: "Feature",
        geometry: {
          bearing: 310,
          type: "Point",
          coordinates: [18.5662383, -33.9685533],
        },
        properties: {
          title: "Location",
          description: "ZA",
        },
      },
      {
        type: "Feature",
        geometry: {
          bearing: 0,
          type: "Point",
          coordinates: [18.7047383, -34.0461583],
        },
        properties: {
          title: "Location",
          description: "ZA",
        },
      },
      {
        type: "Feature",
        geometry: {
          bearing: 0,
          type: "Point",
          coordinates: [26.8671716, -31.8994016],
        },
        properties: {
          title: "Location",
          description: "ZA",
        },
      },
      {
        type: "Feature",
        geometry: {
          bearing: 299,
          type: "Point",
          coordinates: [26.878175, -31.8942983],
        },
        properties: {
          title: "Location",
          description: "ZA",
        },
      },
      {
        type: "Feature",
        geometry: {
          bearing: 43,
          type: "Point",
          coordinates: [27.5801216, -31.9998233],
        },
        properties: {
          title: "Location",
          description: "ZA",
        },
      },
    ],
  },
};

const getters = {
  allCoords: (state) => state.coords,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
