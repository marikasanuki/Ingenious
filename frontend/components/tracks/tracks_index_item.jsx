import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


class TracksIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.concRand = this.concRand.bind(this);
        this.totalRand = this.totalRand.bind(this);
    }

    concRand () {
        return Math.floor((Math.random() * 800) + 1);
    }   

    totalRand() {
        let numer = 10;
        return Math.floor(Math.random() * (1000 * numer - 1 * numer) + 1 * numer) / (1 * numer);
    }   

    render() {
        //  debugger;
        return (
            <li className='tracks-index-li'>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='chart-num'>{this.props.trackNum}</div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <img className='chart-img' src={this.props.image_url} />                    
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='chart-title'>{this.props.title} <span className='chart-lyr'>LYRICS</span></div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='chart-artist'>{this.props.artist}</div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='fire-icon' >
                        <FontAwesomeIcon icon={faFireAlt} />&nbsp;{this.concRand()}
                </div>
                </Link>
                <Link to={`/api/tracks/${this.props.url}`}>
                    <div className='views-icon' >
                        <FontAwesomeIcon icon={faEye} />&nbsp;{this.totalRand()}K
                </div>
                </Link>
            </li>
        );
    }
};

export default TracksIndexItem;