# README

![alt text](https://ingenious-prod.s3.amazonaws.com/ingenious-logo.png "Ingenious")

[Ingenious](https://ingenious-app.herokuapp.com/#/) is a [Genius.com](https://genius.com/) clone project, featuring code-related song lyrics and programming music knowledge. 

Users can browse a curated selection of songs, their lyrics, and annotated notes and intepretations of the tracks' lyrics. 


## Technologies Used

### Backend
* Ruby on Rails
* PostgreSQL

### Frontend
* React
* Redux

### Cloud
* Amazon Web Services
* Heroku


## Features

* User authentication and demo user option

![alt text](https://ingenious-prod.s3.amazonaws.com/login-new.gif "Ingenious sign in")


* Ability to view database of curated songs

* Ability to view indiviual songs and their respective artist, album, and lyrics

* Annotations are saved to individual tracks and dynamically fetched from the database.

* Ability to view curated annotations

![alt text](https://ingenious-prod.s3.amazonaws.com/anno-new.gif "Ingenious annotations")

* Annotations are revealed and hidden on click.

```
    return (
                <div className='anno-show-lyrics-container'>
                    <div className='anno-show-mini-title' >{this.props.track.title} lyrics</div>

                    <div className='anno-show-lyrics' >{this.props.lyrics}</div>
                    <span className='anno-button'
                        onClick={() => this.state.annotationVisible ?
                            this.setState({ annotationVisible: false }) :
                            this.setState({ annotationVisible: true })}>
                    </span>
                    
                     <div className='anno-show-cont' >
                        {this.state.annotationVisible ? this.openAnnotation() : this.hideAnnotation() }
                    </div>
            
                </div>
        )
```

## Future Features
* Signed in users can contribute their own annotations as well as update and delete them.



Not for commercial use. I do not own the rights to any featured music or lyrics.
