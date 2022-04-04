import React from 'react';
import '../styles/Blog.css'

const Blog = () => {
    return (
        <div className='container blog'>
            <h2 className='colored'>Q1. What is Context API ?</h2>
            <p>Context API is a React.js feature that tries to replace the casual way of sending and reciving data via props. On a normal React application we have to send and receive data from one component to another via props which also refers as prop drilling. It is fine for smaller application but on large application it can be really difficult to manage every data/state via prop drilling another problem of prop drilling is data cannot be send upward/backward to it's parent only can be passed to the children. Which is solved and simplified by the Context API. </p>
            <br />
            <h2 className='colored'>Q1. What is Sementic Tag ?</h2>
            <p>Sementic Tag are HTML elements that specify their purpose or decribes their meaning in a more human friendly and human-readable manner. Elements like nav, header, section, footer are sementic elements because they specify their meaning in the name. nav tag specifies that it is used for creating a nav, header to create a header, section and footer both tags describes that they are used to create section and footer </p>
            <br />
            <h2 className='colored'>Q1. What is the difference Inline, Inline-block and Block Elements ?</h2>
            <p>Inline Block, Inline and Block elements are HTML elements used to create fundamental structure of a website. There are few key differences between them. <span className='colored'>Inline elements</span>  cannot have top and bottom margins and only takes up the space it needs. <span className='colored'>Block elements</span> can have margin and padding on all four sides also a block elements takes up a while line of space. <span className='colored'>Inline-block elements</span> are just like Inline element it only takes up the required space. The only key difference is that it can take margin and padding on four sides just like a block element</p>
        </div>
    );
};

export default Blog;