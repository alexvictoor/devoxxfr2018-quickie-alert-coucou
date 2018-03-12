export default (
`type FixDurationFranchise = {
  kind: 'DURATION_FRANCHISE',
  duration: number,
  durationUnit: 'DAY' | 'MONTH' | 'YEAR',
};

const arbFranchise = jsc.record({
  kind: jsc.constant('DURATION_FRANCHISE'),
  duration: jsc.nat,
  durationUnit: jsc.elements(
    ['DAY', 'MONTH', 'YEAR']
  ),
});

`

)
