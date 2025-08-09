//Proposed fixed:

module.exports = {
  getCurrentKey: () => process.env.JWT_CURRENT_SECRET,
  getPreviousKey: () => process.env.JWT_PREVIOUS_SECRET,
};


