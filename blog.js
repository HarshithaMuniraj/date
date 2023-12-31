import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "./blog.css";
const Blog = () => {    
    const [postDate, setPostDate] = useState(new Date());    
    const [postTitle, setPostTitle] = useState('');    
    const [postContent, setPostContent] = useState('');    
    const [postAuthor, setPostAuthor] = useState('');    

    const handleSubmit = (event) => {        
      event.preventDefault()        

      // log form content        
      console.log(postTitle)        
      console.log(postContent)        
      console.log(postAuthor)        
      console.log(postDate)    
  }    

    return (        
     <div className="blog">            
      <form onSubmit={handleSubmit}>                
         <h3>Create Blog Post</h3>                
         <div className="form-group">                    
          <label>Title</label>                    
          <input type="text" name="title" value={postTitle} onChange={event => setPostTitle(event.target.value)}/> 
         </div>                
         <div className="form-group">                    
          <label>Content</label>                    
          <textarea value={postContent} onChange={event => setPostContent(event.target.value)} rows="10"></textarea>                
         </div>                
         <div className="form-group">                    
          <label>Author</label>                    
          <input type="text" name="title" value={postAuthor} onChange={event => setPostAuthor(event.target.value)} />                
         </div>                
         <div className="form-group">                    
          <label>Date Posted</label>                    
          <DatePicker                         
              selected={postDate}                                          
              onChange={date => setPostDate(date)}                     minDate={new Date()}                                               />                
         </div>                
         <button type="submit" className="submitBtn">Post" </button>            
      </form>        
     </div>    
  );
};

export default Blog;