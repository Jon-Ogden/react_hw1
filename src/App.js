import PostCard from "./postCard";
import posts from "./data";
import './App.css';


function App(){
  const renderPosts = () => {
    return posts.map((current) =>{
      return(
        <PostCard
          id={current.id}
          userName={current.userName}
          image={current.image}
          text={current.text}
        />

      );
    });
  };

  return (
    <>
    <h1>App</h1>
    {renderPosts()}
    </>
 );
};
export default App;
