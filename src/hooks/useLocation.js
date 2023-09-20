/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
// LocationService.js
export const getLocation = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const { latitude, longitude } = position.coords;
    return { latitude, longitude };
  } catch (error) {
    throw error;
  }
};