const ageSchool = [12,23,17,19,18];
const ageVillage = [23,45,33,27,55];
const allAge = ageSchool.concat(ageVillage);
const allage2 = [...ageSchool,...ageVillage]
console.log(allage2);

const business = 890;
const minister = 1200;
const sochib = 1290;
const maximum = Math.max(business,minister,sochib);
console.log(maximum);
const maximum2 = Math.max(...ageVillage);
console.log(maximum2);
