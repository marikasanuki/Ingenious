# README

![alt text](https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/ingenious-logo.png "Ingenious")

### [Live Link](https://ingenious-app.herokuapp.com/)

[Ingenious](https://ingenious-app.herokuapp.com/) is a [Genius.com](https://genius.com/) clone project, featuring code-related song lyrics and programming music knowledge. 

Users can browse a curated selection of songs and their lyrics and view annotated notes and interpretations of the tracks' lyrics. A signed-in user can create, update, and delete their own lyric annotations, as well as leave comments on the tracks and upvote or downvote annotations and comments.  

## Technologies Used

### Backend
* Ruby on Rails
* PostgreSQL

### Frontend
* React
* Redux
* JavaScript
* HTML5
* CSS
* Webpack

### Cloud
* Heroku

## Features

* User authentication and demo user option

<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/ingenious-index.gif" width="600" height="auto" align="center"/>
</div>

* Ability to view database of curated song lyrics

* Ability to view individual songs and their respective artist, album, and lyrics

* Ability to view user-generated annotations and comments

* Annotations are saved to individual tracks and dynamically fetched from the database

* Ability for a signed-in user to create and delete their own annotations and comments

* Ability for a signed-in user to edit their own annotations

* Ability for a signed-in user to upvote an annotation or a comment

<div align="center">
  <img src="https://ingenious-prod.s3.amazonaws.com/anno-new.gif" width="600" height="auto" align="center"/>
</div>

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

* Search
* "FEATURED" landing page that links to individual article pages (article index page)
* Individual article pages (article show pages)

Not for commercial use. I do not own the rights to any featured music or lyrics.
