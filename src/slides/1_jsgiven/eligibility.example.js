export default (

`
class EligibilityStage extends Stage {
  loanDate: string;
  currentDate: string;

  the_loan_has_started_on(loanDate: string) {
    this.loanDate = loanDate;
    return this;
  }

  the_current_date_is(currentDate: string) {
    this.currentDate = currentDate;
    return this;
  }

  the_loan_is_eligible_to_bourquin_law() {
    expect(
      isEligibleToBourquin(
        moment(this.loanDate), 
        moment(this.currentDate)
      )
    ).toBe(true);
    return this;
  }
}

scenarios(
 'remaining-capital.eligibility',
 EligibilityStage,
 ({ given, when, then }) => ({

  ['should be eligible to Bourquin when loan has started for over a year']: scenario(
   {},
   () => {
    given()
     .the_current_date_is('2017-01-01');
    when()
     .the_loan_has_started_on('2016-01-01');
    then()
     .the_loan_is_eligible_to_bourquin_law();
   }
  ),
 })
);
`)
