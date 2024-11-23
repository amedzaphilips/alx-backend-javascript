export default function getFullResponseFromAPI(success) {
  const myObj = { status: 200, body: 'Success' };

  const myPromise = new Promise((resolve, reject) => { // Syntax fix here
    if (success) {
      resolve(myObj);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });

  return myPromise; // Ensure the promise is returned
}
