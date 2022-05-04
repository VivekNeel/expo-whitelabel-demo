const appName = "whitelabelOne";
const configs = {
  core: {
    version: "1.0",
    name: "Core",
    splash: {
        image: "assets/splash.png",
      },
    android: {
      versionCode: 1,
      package: "com.core",
    },
    icon: "assets/icon.png",
    ios: {
      bundleIdentifier: "com.core",
    },
    extra : {
        buildType : "Core"
    }
  },
  whitelabelOne: {
    name: "WhitelabelOne",
    icon: "assets/whitelabelone/icon.png",
    splash: {
        image: "assets/whitelabelone/splash.png",
      },
    android: {
      versionCode: 1,
      package: "com.whitelabelone",
    },
    ios: {
      bundleIdentifier: "com.whitelabelone",
    },
    version: "1.0",
    extra : {
        buildType : "whitelabelone"
    }
  },
};
export default ({ config }) => {
  return {
    ...configs[appName],
  };
};
