export default (random1 = randomInt(), random2  = randomInt(), random3 = randomInt(), random4 = randomPercentile()) => (
`// given
const histogram = hdr.build();
histogram.recordValue(42);
histogram.recordValue(12);
histogram.recordValue(36);

// when
const encoded = encode(histogram);
const decoded = decode(encoded);

// then
expect(
  decoded
).to.deep.equal(
  histogram
);



// given
const histogram = hdr.build();
histogram.recordValue(${random1});
histogram.recordValue(${random2});
histogram.recordValue(${random3});

// when
const encoded = encode(histogram);
const decoded = decode(encoded);

// then
expect(
  decoded
).to.deep.equal(
  histogram
);
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
