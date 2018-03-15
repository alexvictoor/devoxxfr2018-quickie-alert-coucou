
export default (`function isAgeBelowThreshold(
  rawBirthdate: string, 
  loanEndDate: Moment, 
  threshold: number) {

  const birthdate 
    = moment(rawBirthdate, 'DD/MM/YYYY');
  const ageWhenLoanEnds 
    = loanEndDate.diff(birthdate, 'year');
  return ageWhenLoanEnds <= threshold;
}

it('works', () => {
  expect(
    isAgeBelowThreshold(
      '06/01/1990', 
      moment().year(2025), 
      40
    )
  ).toBe(true);
});











`);