import React, {Component} from 'react';
import instaRoxy from '../images/insta-roxy-logo.png';


class InstagramFeed extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    
    componentDidMount(){
        this.getPosts();
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts = async () => {
        const apiKey = 'IGQVJWM3NBSzhsX01GM0FCdHk4SEVjbXNxWk4zQVNiajNkRWtkMmt0elRJY0hvOTdJaWdNM0MzeXphd0RKYUEwRUpPNGxia3J0YkxQSFk3VTl3YkNJdllKOV81NG9wang4UjhSWWU1ajJMWjVTdm5CNgZDZD';
        
        try {
          const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${apiKey}`);
          if(response.status !== 200){
            throw(Error(response.statusText));
          }
          const parsedResponse = await response.json();
        //   console.log(parsedResponse, "insta PR");
    
          const postsArray = parsedResponse.data.map((post) => {
            console.log(post);
            if(post.media_type === "VIDEO"){
                return {
                    id: post.id,
                    img: post.thumbnail_url,
                    hyperlink: post.permalink,
                    caption: post.caption
                }
            } else {
                return {
                    id: post.id,
                    img: post.media_url,
                    hyperlink: post.permalink,
                    caption: post.caption
                }
            }
            
          });
    
          //console.log(postsArray, "posts array");
          this.setState({
            instaPosts: postsArray
          })
    
        } catch (error){
          console.log(error);
          
        }
    
      }

    

    render(){
        const showPosts = 
            this.state.instaPosts ? this.state.instaPosts.map((item, index) => {
                return(
                    <div className="posts" key={index}>
                        <a href={item.hyperlink} target="_blank" rel="noopener noreferrer" ><img src={item.img} alt={item.caption}/></a>
                    </div>
                )
            }) : null;
        
        

        return(
            <div id="insta">
                <header className="App-header">
                    <img src={instaRoxy} className="shop-logo" alt="logo" />
                </header>
                <div id="instagramFeed">
                    {this.state.instaPosts ? showPosts : null}
                </div>
            </div>
        )
    }
}

export default InstagramFeed;
