import React from 'react'

export default class Category extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            category: '',
            title: 'Category'
        }
    }

    handleCategory = async (e, txt) => {
        await this.setState({
            category: txt,
            title: e.target.textContent
        })
        
        this.props.categoryCallback(this.state.category)
    }

    render() {
        return (
            <div>
                <div style={{fontFamily:'Orbitron', fontSize: '20px'}} className="dropdown">
                    <button className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                        {this.state.title}
                    </button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, '')}>All</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, 'business')}>Business</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, 'entertainment')}>Entertainment</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, 'general')}>General</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, 'health')}>Health</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, 'science')}>Science</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, 'sports')}>Sports</button>
                        <button className="dropdown-item btn btn-light" onClick={(e) => this.handleCategory(e, 'technology')}>Technology</button>
                    </div>
                </div>
            </div>
        )
    }
}