// Prevent undefined crashes

const _Result = x =>
({
   map: f => _Result(f(x)),
   fold: (f, g) => g(x)
})
const _Error = x =>
({
   map: f => _Error(x),
   fold: (f, g) => f(x)
})

const makeNullable = x =>
   x != null ? _Result(x) : _Error(null)

const colorArray = {red: '#ff444', blue: '#3b5998', yellow: '#fff68f'}

const findColor = (name, data) =>
   makeNullable(data[name])

const result = findColor('red', colorArray)
               .map(c => c.slice(1))
               .fold(error => 'color not found',
                     result => result)

console.log(result);
