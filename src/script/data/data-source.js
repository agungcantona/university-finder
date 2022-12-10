/* eslint-disable prefer-promise-reject-errors */
class DataSource {
  static async searchUniv (keyword) {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?name=${keyword}`)
      const responseJson = await response.json()
      if (responseJson.length >= 1) {
        return Promise.resolve(responseJson)
      } else {
        return Promise.reject((`${keyword} is not found`))
      }
    } catch (error) {
      return error
    }
  }
}

export default DataSource
