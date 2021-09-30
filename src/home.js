import BlogList from "./bloglist";
import useFetch from "./usefetch";


const Home = () => {
const {data : blog , isPending , error } = useFetch('http://localhost:8000/blogs')    

   

    
 
    return (
        <div className="home">
        {error && <div> {error} </div>}
        {isPending && <div> loading . . . . </div>}
        { blog && <BlogList blog={blog} title="All blogs!"  /> }
        
        </div>
    );
}
 
export default Home;