const validateConfig = (config) => Object.values(config).every((value) => value);

export { validateConfig };