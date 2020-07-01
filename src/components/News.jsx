import React from 'react'
import Category from './Category'
import Country from './Country'
import axios from 'axios'

const apiKey = 'apiKey=ae4bef3f6bc54be5bf618c68d460bd27'
const url = 'https://newsapi.org/v2/top-headlines?'
let country, category

export default class News extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            news: [],
            country: 'in',
            category: ''
        }
    }

    async componentDidMount() {
        country = 'country=' + this.state.country + '&'
        let accessPoint = url + country + apiKey
        await axios.get(accessPoint)
            .then(async (res) => await this.setState({ news: res.data.articles }))
            .catch(err => console.log())

    }

    async componentWillUpdate() {
        country = 'country=' + this.state.country + '&'
        if (this.state.category) {
            category = 'category=' + this.state.category + '&'
            let accessPoint = url + country + category + apiKey

            await axios.get(accessPoint)
                .then(async (res) => await this.setState({ news: res.data.articles }))
                .catch(err => console.log())
        } else {
            let accessPoint = url + country + apiKey

            await axios.get(accessPoint)
                .then(async (res) => await this.setState({ news: res.data.articles }))
                .catch(err => console.log())
        }
    }

    categoryCallback = (cat) => {
        this.setState({
            category: cat
        })
    }

    countryCallback = (cn) => {
        this.setState({
            country: cn
        })
    }

    render() {
        return (
            this.state.news &&
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div style={{marginLeft: '35%', marginRight: '10%'}}>
                        <Category categoryCallback={this.categoryCallback} />
                    </div>
                    <div>
                        <Country countryCallback={this.countryCallback} />
                    </div>

                </nav>
                <div id="newsCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {this.state.news.map((n, i) => {
                            let classname = (i === 0) ? "carousel-item active" : "carousel-item"
                            let image = n.urlToImage ? n.urlToImage : ''
                            return (
                                <div key={i} className={classname}>
                                    <a href={n.url} target="blank">
                                        <img src={image} style={{ width: '1080px', height: '720px' }} className="d-block w-100" alt="" />
                                        <div className="carousel-caption d-npne d-md-block">
                                            <h4 style={{ color: '#e2e60b', fontFamily: 'Orbitron' }}>{n.title}</h4>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                        }
                    </div>
                    <a className="carousel-control-prev" href="#newsCarousel" data-slide="prev">
                        <span className="carousel-control-prev-icon" style={{backgroundColor: 'black'}} ></span>
                    </a>
                    <a className="carousel-control-next" href="#newsCarousel" data-slide="next">
                        <span className="carousel-control-next-icon" style={{backgroundColor: 'black'}}></span>
                    </a>
                </div>
            </div>
        )
    }
}