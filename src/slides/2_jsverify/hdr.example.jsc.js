export default (random1 = randomInt(), random2  = randomInt(), random3 = randomInt(), random4 = randomPercentile()) => (
`import * as jsc from "jsverify";

const property = jsc.check(jsc.forall(
  jsc.array(jsc.nat),   // [ ${random1}, ${random2}... ]
  (numbers: number[]) => {
    
    // given
    const histogram = hdr.build();
    numbers.forEach(
      n => histogram.recordValue(n)
    );

    // when
    const encoded = encode(histogram);
    const decoded = decode(encoded);
    
    // then
    return deepEqual(actual, expected);
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
    : Math.floor(Math.random() * 100000)
)

const randomPercentile = () => (
    (50 + Math.floor(Math.random() * 50)) + "." +  Math.floor(Math.random() * 1000) 
)

//(), randomInt(), randomInt(), randomPercentile()