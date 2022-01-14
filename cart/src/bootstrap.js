import faker from 'faker'

const mount = element => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`

  element.innerHTML = cartText
}

// Context/Situation #1
// We are running this file in development in insolation
// We are using our local index.html file
// Which DEFNITELY has an element with an id of 'dev-products'
// We want to inmediately render our app into that element
if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dev-cart')

  // Assuming our container doesnt have an element
  // with id 'dev-products'...
  if (element) {
    // We are probably running in insolation
    mount(element)
  }
}

// Context/Situation #2
// We are running this file in production
// Through the Container app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to inmediately render the app
export { mount }
