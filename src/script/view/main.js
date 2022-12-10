import '../component/search-bar.js'
import '../component/univ-list.js'
import DataSource from '../data/data-source.js'
const $ = require('jquery')

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const univListElement = document.querySelector('univ-list')
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchUniv(searchElement.value)
      $('#search-result').html(`Search Result For "${searchElement.value}"`)

      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = results => {
    univListElement.univs = results
  }

  const fallbackResult = message => {
    univListElement.renderError(message)
  }

  searchElement.clickEvent = onButtonSearchClicked
}

export default main
