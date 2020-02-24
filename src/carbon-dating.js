const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || sampleActivity == "" || Number(sampleActivity) <=  0 || Number(sampleActivity) > MODERN_ACTIVITY || Number.isNaN(parseFloat(sampleActivity))){
    return false;
  } else {
    let k = 0.693/HALF_LIFE_PERIOD;
    let t = Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity) ))/k;

    return Math.ceil(t);

  }
  
  

 

  
};
