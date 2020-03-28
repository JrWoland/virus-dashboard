import axios from 'axios'

class CoronaVirusApi {
  #headers = {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': 'a3495eb567msheffe8e1e8777959p1480fejsna8c7a7c97dbc',
  }
  #myAxios = axios.create({
    baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus',
    headers: this.#headers,
  })

  async myRequest(request) {
    try {
      const result = await request
      return result.data
    } catch (error) {
      return new Error(error)
    }
  }

  getAllInfectedCountries() {
    return this.myRequest(this.#myAxios.get('/affected.php'))
  }

  getWorldTotalStats() {
    return this.myRequest(this.#myAxios.get('/worldstat.php'))
  }

  getLatestStatsByCountryName(countryName) {
    return this.myRequest(
      this.#myAxios.get('/latest_stat_by_country.php', {
        params: { country: countryName },
      })
    )
  }

  getHistoryByCountryName(countryName) {
    return this.myRequest(
      this.#myAxios.get('/cases_by_particular_country.php', {
        params: { country: countryName },
      })
    )
  }

  getHistoryByCountryNameAndDate(countryName, date) {
    return this.myRequest(
      this.#myAxios.get('/history_by_country_and_date.php', {
        params: { country: countryName, date: date },
      })
    )
  }

  getCasesByCountry() {
    return this.myRequest(this.#myAxios.get('/cases_by_country.php'))
  }
}

export default new CoronaVirusApi()
