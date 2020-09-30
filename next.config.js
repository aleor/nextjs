const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('dev mode');

    return { ...defaultConfig, webpack: {} };
  }

  return defaultConfig;
};

// alternatively:
// module.exports = {
//   webpack: {
//     // webpack config params here
//   },
// };
