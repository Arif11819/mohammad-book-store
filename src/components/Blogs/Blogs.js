import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='question-container'>
                <h1 className='text-4xl mt-10 font-style: italic'>What is Context API?</h1>
                <p className='mt-8 mb-8 p-4'>The Context API is a React structure that allows you to exchange unique details and aids in prop-drilling resolution from all levels of your application. This API addresses one major issue: prop drilling. Even if you're not familiar with the term, it's likely that you've encountered it while working on a React.js app. Prop drilling is the process of passing data from component A to component Z via multiple layers of intermediary React components. The component will receive props indirectly, and we will be responsible for ensuring that everything works properly.</p>
            </div>
            <div className='question-container'>
                <h1 className='text-4xl mt-10 font-style: italic'>Difference between Inline blocks and Inline elements?</h1>
                <p className='mt-8 mb-8 p-4'>Display: inline-block introduced a new method for creating side-by-side boxes that collapse and wrap properly based on the available space in the containing element. It simplifies the creation of layouts that were previously accomplished with floats. There is no longer any need to clear floats. The main difference between display: inline and display: inline-block is that inline-block allows you to specify the element's width and height. Also, when using display: inline, top and bottom margins and paddings are ignored, whereas when using display: inline-block, they are.The difference between display: inline-block and display: block is that a line break occurs after the element in display: block, so a block element does not sit next to other elements.</p>
            </div>
            <div className='question-container'>
                <h1 className='text-4xl mt-10 font-style: italic'>What is Simantic Tag?</h1>
                <p className='mt-8 mb-8 p-4'>HTML semantics refers to the tags that add meaning to an HTML page rather than just presenting it. It clarifies HTML by better defining the various sections and layout of web pages.HTML semantics refers to the tags that add meaning to an HTML page rather than just presenting it. It clarifies HTML by better defining the various sections and layout of web pages.form, table and article tags are the examples of semantic elements that clearly define their content.And Non-semantic elements include div and span, which reveal nothing about their content.</p>
            </div>
        </div>
    );
};

export default Blogs;