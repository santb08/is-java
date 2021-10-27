const isJavaAsync = () => {
  return Promise.resolve({
    status: false,
    message: "javascript != java"
  }).catch(() => 'Ok, maybe you are not in Javascript');
};

const isJavaSync = () => {
  return {
    status: false,
    message: "javascript != java"
  };
}

module.exports = {
  isJavaAsync,
  isJavaSync,
  isJava: isJavaSync
};
