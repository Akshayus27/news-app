import React from 'react'

export default class Country extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            country: '',
            title: 'Country'
        }
    }

    handleCountry = async (e, txt) => {
        await this.setState({
            country: txt,
            title: e.target.textContent
        })

        this.props.countryCallback(this.state.country)
    }

    render() {
        return (
            <div>
                <div style={{fontFamily:'Orbitron', fontSize: '20px'}} className="dropdown">
                    <button className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                        {this.state.title}
                    </button>
                    <div className="dropdown-menu scrollable-menu" style={{ maxHeight: '400px', overflowX: 'hidden' }}>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ar')}>Argentina</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'au')}>Australia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'at')}>Austria</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'be')}>Belgium</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'br')}>Brazil</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'bg')}>Bulgaria</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ca')}>Canada</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'cn')}>China</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'co')}>Colombia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'cu')}>Cuba</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'cz')}>Czech Republic</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'eg')}>Egypt</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'fr')}>France</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'de')}>Germany</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'gr')}>Greece</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'hk')}>Hong Kong</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'hu')}>Hungary</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'in')}>India</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'id')}>Indonesia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ie')}>Ireland</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'il')}>Israel</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'it')}>Italy</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'jp')}>Japan</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'lv')}>Latavia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'lt')}>Lithuania</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'my')}>Malaysia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'mx')}>Mexico</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ma')}>Morocco</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'nl')}>Netherlands</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'nz')}>New Zealand</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ng')}>Nigeria</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'no')}>Norway</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ph')}>Philippines</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'pl')}>Poland</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'pt')}>Portugal</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ro')}>Romania</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ru')}>Russia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'sa')}>Saudi Arabia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'rs')}>Serbia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'sg')}>Singapore</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'sk')}>Slovakia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'si')}>Slovenia</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'za')}>South Africa</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'kr')}>South Korea</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'pt')}>Sweden</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ch')}>Switzerland</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'tw')}>Taiwan</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'th')}>Thailand</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'tr')}>Turkey</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ae')}>UAE</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'ua')}>Ukraine</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'gb')}>United Kingdom</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 'us')}>United States</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCountry(e, 've')}>Venuzuela</button>
                    </div>
                </div>
            </div>
        )
    }
}