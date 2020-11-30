# README

![alt text](https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/ingenious-logo.png "Ingenious")

### [Live Link](https://ingenious-app.herokuapp.com/)

[Ingenious](https://ingenious-app.herokuapp.com/) is a [Genius.com](https://genius.com/) clone project, featuring code-related song lyrics and programming music knowledge. 

All users can openly browse a curated selection of songs and their lyrics and view annotated notes and interpretations of the tracks' lyrics. _Signed-in_ users can create, update, and delete their own lyric annotations, leave or delete their own comments on the tracks, and upvote or downvote annotations and comments.  

<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/00-ingenious-index.gif" width="700" height="auto" align="center"/>
</div>

While logged in, click and drag to highlight and select lyrics that you'd like to annotate. Type your submission in the form that opens up, and submit to publicly save it to the track's lyrics. 

## Technologies Used

### Backend
* Ruby on Rails (5.2.4.3)
* PostgreSQL

### Frontend
* React (16.13.1)
* Redux
* JavaScript
* HTML5
* CSS
* Webpack

### Cloud
* Heroku

## Features


### Any user can view a curated selection of songs, each track's respective artist, album, and lyrics, and user-generated annotations and comments left on every individual track.

<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/00.5-view-logged-out.gif" width="700" height="auto" align="center"/>
</div>

* Annotations are revealed and hidden on click.

```JavaScript
        for (let i = 0; i < annotationsArr.length; i++) {
            const annotation = annotationsArr[i];
            if (lyrics === undefined) { 
                return <div></div>
            }
            let unannotatedSlicedLyric = lyrics.slice(prevIdx, annotation.start_idx);
            let annotatedSlicedLyric = lyrics.slice(annotation.start_idx, annotation.end_idx)
            allFormattedLyrics.push(
                <span key={uniqueKey++} 
                    className='unannotated-lyric'
                >
                    {unannotatedSlicedLyric}
                </span>
            );
            allFormattedLyrics.push(
                <span key={uniqueKey++}
                    className='highlighted-annotated-lyric'
                    ref={ node => { this.node = node; } }
                    onClick={() => 
                        {   this.setCurrentAnnotationId(annotation.id)
                        }}
                >
                    {annotatedSlicedLyric}
                </span>
            );

            if ((i === Object.keys(annotationsArr).length - 1)) { 
                allFormattedLyrics.push(
                    <span key={uniqueKey++}
                        className='unannotated-lyric'
                    >
                        {lyrics.slice(annotation.end_idx, lyrics.length)}
                    </span>
                )
            }   
            prevIdx = annotation.end_idx;            
        };

```

### User authentication
* Sign up with a new account or login to a previously made account. 

* Custom error messages. 

* Option to log in with a demo user account.


<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/01-user-auth.gif" width="700" height="auto" align="center"/>
</div>


### Signed-in users can create, update, and delete their own lyric annotations

<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/03-create-update-delete-anno.gif" width="700" height="auto" align="center"/>
</div>

* Annotations are saved to individual tracks and dynamically fetched from the database


### Signed-in users can leave or delete their own comments on individual tracks

<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/03.5-leave-comment.gif" width="700" height="auto" align="center"/>
</div>

### Signed-in users can upvote or downvote a annotation or a comment

<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/02-view-anno-upvote.gif" width="700" height="auto" align="center"/>
</div>

* I utilized polymophic rails associations to leverage the ability to reuse the vote model for both annotations and comments. On top of allowing for DRY-er code for the current application, this choice will come in handy in a future implementation of leaving upvotable and downvotable comments on individual annotations. 

```Ruby
    class Vote < ApplicationRecord
        
        validates :author_id, uniqueness: { scope: [:votable_id, :votable_type] }
        validates :value, :inclusion => -1..1

        belongs_to :votable, polymorphic: true

        belongs_to :user, 
            foreign_key: :author_id,
            class_name: :User
        
    end


    def create
        @vote = Vote.new(vote_params)
        @vote.author_id = current_user.id
        if @vote.save!
            if @vote.votable_type == 'Annotation'
                @annotation = Annotation.find(@vote.votable_id)
                render 'api/annotations/show'
            elsif @vote.votable_type == 'Comment'
                @comment = Comment.find(@vote.votable_id)
                render 'api/comments/show'
            end
        else
            render json: @vote.errors.full_messages, status: 422
        end
    end

```


<div align="center">
  <img src="https://github.com/marikasanuki/Ingenious/blob/master/app/assets/images/demo_images/04-upvote-comments.gif" width="700" height="auto" align="center"/>
</div>



## Future Features

* Search option to find tracks
* "FEATURED" section (articles index) on landing page that links to individual article pages 
* Individual article pages (articles show pages)

_Not for commercial use. I do not own the rights to any featured music or lyrics._
