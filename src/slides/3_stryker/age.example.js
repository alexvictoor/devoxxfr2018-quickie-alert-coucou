
export default (format = genFormat()) => (`function isAgeBelowThreshold(
  rawBirthdate: string, 
  loanEndDate: Moment, 
  threshold: number) {

  const birthdate 
    = moment(rawBirthdate, '${format}');
  const ageWhenLoanEnds 
    = loanEndDate.diff(birthdate, 'year');
  return ageWhenLoanEnds <= threshold;
}

expect(
  isAgeBelowThreshold(
    '06/01/1990', 
    moment().year(2025), 
    40
  )
).toBe(true);
                                               .










`);

const format ='DD/MM/YYYY';
let index = 0
const genFormat = () => {
  index++;
  if (index > 24) {
    const i = format.length - (Math.floor((index - 25)/2) % format.length); 
    return format.slice(0, i) + '🐛'
  }
  return format;
}