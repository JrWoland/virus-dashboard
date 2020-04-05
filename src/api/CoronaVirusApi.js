/* ### POWERED BY ####
 https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#7934d316-f751-4914-9909-39f1901caeb8
 */

import axios from 'axios'

class CoronaVirusApi {
  #rapidKey = 'a3495eb567msheffe8e1e8777959p1480fejsna8c7a7c97dbc'
  #headers = {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': this.#rapidKey,
  }
  #myAxios = axios.create({
    baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus',
    headers: this.#headers,
  })

  #myAxios2 = axios.create({
    baseURL: 'https://api.covid19api.com',
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

  getLatestCasesForContries() {
    return this.myRequest(this.#myAxios2.get('/summary'))
  }

  getHistoryFromDayOneForCountry(countrySlug, statusSlug) {
    return this.myRequest(
      this.#myAxios2.get(`/total/country/${countrySlug}/status/${statusSlug}`)
    )
  }

  getHistoryFromDayOneForCountryLive(countrySlug, statusSlug) {
    return this.myRequest(
      this.#myAxios2.get(
        `/dayone/country/${countrySlug}/status/${statusSlug}/live`
      )
    )
  }
}

export default new CoronaVirusApi()
