export const ENV = {
  mode: location.hostname.includes("github.io") ? "production" : "development",
  debug: !location.hostname.includes("github.io")
};
