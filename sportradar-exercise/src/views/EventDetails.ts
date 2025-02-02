export default class EventDetails {
  constructor(
    id = null,
    matchDate = 'Date To Be Announced',
    startTime = 'Time To Be Announced',
    stadium = null,
    homeTeam = 'Unknown Team',
    awayTeam = 'Unknown Team',
    stageOfCompetetion = null,
    nameOfCompetetion = null,
    countryOfHomeTeam = 'Unknown Country',
    countryOfAwayTeam = 'Unknown Country',
  ) {
    this.id = id
    this.matchDate = matchDate
    this.startTime = startTime
    this.stadium = stadium
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.stageOfCompetetion = stageOfCompetetion
    this.nameOfCompetetion = nameOfCompetetion
    this.countryOfHomeTeam = countryOfHomeTeam
    this.countryOfAwayTeam = countryOfAwayTeam
  }
}
