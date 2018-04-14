const httpOptions = {
  headers: {"Access-Control-Request-Method": "*"}
};

const CourseModel = function () {

  let numberOfGuests = 4;
  let observers = [];

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  // API Calls
  var fetch =require('node-fetch');

  this.getAllCourses = function () {
    fetch('http://crossorigin.me/https://www.kth.se/api/kopps/v2/courses/DM.json')
    .then(function(res) {
      if (!res.ok) {
      throw Error(res.statusText);
    }
        console.log(res);
        return res;

    })
    .catch(function(error) {
      console.log('Looks like there was a problem: \n', error);
    });
  }

  
  // API Helper methods

  const processResponse = function (response) {
    console.log(response);
    if (response.ok) {
      console.log(response)
      return response.json()

    }
    throw response;
  }

  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllCourses() API Error:', error.message || error)
      })
    } else {
      console.error('getAllCourses() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new CourseModel();
