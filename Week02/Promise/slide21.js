var data = {
    id: 1,
    dob: "26/11/2002",
    name: "PhanTruongAn",
  };
  
  var promise = new Promise(function (resolve, reject) {
    resolve();
  });
  
  promise
    .then(function () {
      return new Promise(function (resolve) {
        setTimeout(resolve, 3000);
      });
    })
    .then(function (data) {
      console.log(data);
      return 2;
    })
    .then(function (data) {
      console.log(data);
    });