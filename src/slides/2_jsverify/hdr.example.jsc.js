export default (random1 = randomInt(), random2  = randomInt(), random3 = randomInt(), random4 = randomPercentile()) => (
`import * as jsc from "jsverify";

const property = jsc.check(jsc.forall(
  jsc.array(jsc.nat), 
  jsc.integer(50, 100), 
  (numbers: number[], percentile: number) => {
    
    // given
    const histogram = hdr.build();
    numbers.forEach(
      n => histogram.recordValue(n)
    );

    // when
    const encoded = encode(histogram);
    const decoded = decode(encoded);
    
    // then
    const actual = 
      decoded.getValueAtPercentile(centile)
    const expected = 
      histogram.getValueAtPercentile(centile)
    return actual === expected;
  }
));
expect(property).to.be.true;
                                            ;
`

)

let index = 0
const randomInt = () => (
    (index++ % 5 === 0) ?
    Math.floor(Math.random() * 1000)
    : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
)

const randomPercentile = () => (
    (50 + Math.floor(Math.random() * 50)) + "." +  Math.floor(Math.random() * 1000) 
)

//(), randomInt(), randomInt(), randomPercentile()