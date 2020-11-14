const fs = require('fs')
const faker = require('faker')
const argv = require('yargs').argv

const lines = argv.lines || 100
const filename = argv.output || 'sellers.csv'
const stream = fs.createWriteStream(filename)

const createSeller = () => {
  const seller_rating = faker.random.number(5)
  const total_sales = faker.random.number(2500)
  const seller_name = faker.internet.userName()
  const seller_city = faker.address.city()
  const seller_country = faker.address.country()
  const on_etsy_since = faker.random.number({
    'mix': 2010,
    'max': 2020
  })

  return `${seller_rating},${total_sales},${seller_name},${seller_city},${seller_country},${on_etsy_since}\n`
}

const startWriting = (writeStream, encoding, doneCB) => {
  let i = lines;
  function writing(){
    let canWrite = true;
    do {
      i--
      let post = createSeller()
      //check if i === 0 so we would write and call `done`
      if (i === 0) {
        // fire cb
        writeStream.write(post, encoding, doneCB)
      } else {
        // don't fire cb
        writeStream.write(post, encoding)
      }
      //else call write and continue looping
    } while (i > 0 && canWrite)
    if (i > 0 && !canWrite) {
      //our buffer for stream filled and need to wait for drain
      // Write some more once it drains.
      writeStream.once('drain', writing);
      }
    }
    //initiate our writing function
    writing()
}

//write our `header` line before we invoke the loop
stream.write(`userId,title,content,image,date\n`, 'utf-8')
//invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end()
})
