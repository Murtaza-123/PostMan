async function getImage() {
  const promise1 = fetch("http://www.google.com");
  const promise2 = fetch(
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
  );
  const promise3 = fetch("https://github.com/Murtaza-123");
   const startTime1 = performance.now();
  try {
    const [response1, response2, response3] = await Promise.all([
      promise1,
      promise2,
      promise3,
    ]);
    const endTime1 = performance.now();
    const timeInSeconds1 = (endTime1 - startTime1) / 1000;
    console.log(timeInSeconds1);


  //   const startTime1 = performance.now();
  //   const contentType1 = response1.headers.get('content-type');
  //   const endTime1 = performance.now();
  //   console.log(contentType1);
  //   const timeInSeconds1 = (endTime1 - startTime1) / 1000;
  //   console.log("Time taken for request 1:", timeInSeconds1, "seconds");

  //   const startTime2 = performance.now();
  //   const contentType2 = response2.headers.get('content-length');
  //   const endTime2 = performance.now();
  //   console.log(contentType2);
  //   const timeInSeconds2 = (endTime2 - startTime2) / 1000;
  //   console.log("Time taken for request 2:", timeInSeconds2, "seconds");

  //   const startTime3 = performance.now();
  //   const contentType3 = response3.headers.get('content-type');
  //   const endTime3 = performance.now();
  //   console.log(contentType3);
  //   const timeInSeconds3 = (endTime3 - startTime3) / 1000;
  //   console.log("Time taken for request 3:", timeInSeconds3, "seconds");
  } catch (error) {
  //   console.error("Error occurred:", error);
   }
}

getImage();
