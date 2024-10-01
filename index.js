const LaunchDarkly = require('launchdarkly-node-server-sdk');

const client = LaunchDarkly.init('sdk-9d5b5080-7235-463f-b920-bfae60d08885');

client.on('ready', () => {
    const user = { key: 'new-feature' }; // User context
    client.variation('new-feature', user, false, (err, showFeature) => {
        if (showFeature) {
            console.log('New feature is enabled!');
        } else {
            console.log('New feature is disabled!');
        }
    });
});
