// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function (driver) {return driver.revenue > revenue});
}

function driverNamesWithRevenueOver(drivers, revenue) {
    let richDrivers = driversWithRevenueOver(drivers,revenue);
    return richDrivers.map(function (driver) {return driver.name});
}

function exactMatch(drivers, obj) {
    
    return drivers.filter(function(driver) {
        for (const key in obj) {
            if (obj[key] === driver[key]) {
            return driver
            }
        }
    });
}

function exactMatchToList(drivers, obj) {
  let  matchingDrivers = exactMatch(drivers,obj);
  return matchingDrivers.map(function (driver) {return driver.name});
}


