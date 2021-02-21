let user = {
    name: 'Yew',
    age: '80',
    email: 'leeKuanYew@sg.com',
    location: 'Singapore',
    blogs: [
        { title: 'Tax rebates for graduate mothers', likes: 30},
        { title: 'Affordable social housing for all citizens', likes: 40}, 
        { title: 'Exercise-led preventative healthcare reduces medical costs', likes: 400},
        { title: 'Conserve your running water!', likes: 90}
    ],
    login: function(){
        console.log('The user logged in.');
    },
    logout(){ // shorthand version of regular functions for writing these methods.
        console.log('The user logged out.');
    },
    logBlogs(){ 
        console.log('This user has written the below blogs:');
        this.blogs.forEach(blog => console.log(blog.title, blog.likes)); // contextual variable .this points to the object - user. 
    }
};

export{user};
