import React, { useState ,useEffect} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import Fab from "@material-ui/core/Fab";
import Footer from "./Footer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Welcome from 'react-welcome-page'

import Snackbar from '@material-ui/core/Snackbar';



 


import Detail from "./Detail";

const List = () => {
  const [stext, setstext] = useState("avenger");
  const [menuleft, setmenuleft] = useState([]);
  const [menuright, setmenuright] = useState([]);
  const [result, setresult] = useState([]);
  const [result2, setresult2] = useState([]);
  const [open, setOpen] = React.useState(false);
  
  const [detailbool, setdetailbool] = useState(false);
  const [imval, setimval] = useState();
 



  const showChange = (event) => {
    setstext(event.target.value.toLowerCase());
  };

  const showmenuleft = () => {
    axios
    
      .get(`https://doomovies-api.gxc-x.com/api/genres`)
      // .get(`https://www.omdbapi.com/?apikey=4eb65943&s=${stext}`)
      .then((res) => {
        setmenuleft(res.data.data.map((p) => p));
      })
      .catch((error) => {
        //alert("No search results found!! check for spelling ");
        setOpen(true);
      });
  };
  // const showmoviesbygenre = (genreid) => {
  //   console.log(genreid);
  //   // axios
    
  //   //   .get(`http://0.0.0.0:1337/api/genres`)
  //   //   // .get(`https://www.omdbapi.com/?apikey=4eb65943&s=${stext}`)
  //   //   .then((res) => {
  //   //     setmenuleft(res.data.data.map((p) => p));
  //   //   })
  //   //   .catch((error) => {
  //   //     //alert("No search results found!! check for spelling ");
  //   //     setOpen(true);
  //   //   });
  // };

  // function showmoviesbygenre(type_movies) {
  //   console.log(type_movies)
  //   axios
  //   .get(`http://localhost:1337/api/movies?fields[0]=title&fields[1]=type_movies&fields[2]=year&fields[3]=imdb&fields[4]=type&fields[5]=image_poster&filters[type_movies][$contains]=${type_movies}`)
  //     // .get(`http://localhost:1337/api/movies?fields[0]=title&fields[1]=year&fields[2]=imdb&fields[3]=type&fields[4]=image_poster&pagination[page]=1&pagination[pageSize]=10&filters[title][$contains]=${stext}`)
  //     // .get(`http://localhost:1337/api/movies`)
  //     .then((res) => {

  //       // setresult(res.data.data.map((p) => p));
  //       console.console.log('result data = ');
  //       console.console.log(res.data.data);
  //       // setresult(res.data.Search.map((p) => p));
  //       // console.log(res.data) // maiza
  //       // console.log(res.data.data[0].attributes) // maiza
  //       // console.log(res.data.Search[0]) // maiza

  //     })
  //     .catch((error) => {
  //       // alert("No search results found!! check for spelling ");
  //       setOpen(true);
  //     });

  //   // setdetailbool(true);
  //   // setimval(i);
  // }


  const showmoviesbygenre = (type_movies) => {
    axios
      .get(`https://doomovies-api.gxc-x.com/api/movies?fields[0]=title&fields[1]=type_movies&fields[2]=year&fields[3]=imdb&fields[4]=type&fields[5]=image_poster&filters[type_movies][$contains]=${type_movies}`)
      // .get(`http://localhost:1337/api/movies?fields[0]=title&fields[1]=type_movies&fields[2]=year&fields[3]=imdb&fields[4]=type&fields[5]=image_poster&filters[title][$contains]=${stext}`)
      // .get(`https://www.omdbapi.com/?apikey=4eb65943&s=${stext}`)
      .then((res) => {
        setresult(res.data.data.map((p) => p));
        // setresult(res.data.Search.map((p) => p));
        // console.log(res.data) // maiza
        // console.log(res.data.data[0].attributes) // maiza
        // console.log(res.data.Search[0]) // maiza

      })
      .catch((error) => {
        //alert("No search results found!! check for spelling ");
        setOpen(true);
      });
      show2();
     
  };
  
  const show = () => {
    axios
    .get(`https://doomovies-api.gxc-x.com/api/movies?fields[0]=title&fields[1]=type_movies&fields[2]=year&fields[3]=imdb&fields[4]=type&fields[5]=image_poster&filters[title][$contains]=${stext}`)
      // .get(`http://localhost:1337/api/movies?fields[0]=title&fields[1]=type_movies&fields[2]=year&fields[3]=imdb&fields[4]=type&fields[5]=image_poster&filters[title][$contains]=${stext}`)
      // .get(`http://0.0.0.0:1337/api/movies?fields[0]=title&fields[1]=year&fields[2]=imdb&fields[3]=type&fields[4]=image_poster&pagination[page]=1&pagination[pageSize]=7&filters[title][$contains]=${stext}`)
      // .get(`https://www.omdbapi.com/?apikey=4eb65943&s=${stext}`)
      .then((res) => {
        setresult(res.data.data.map((p) => p));
        // setresult(res.data.Search.map((p) => p));
        // console.log(res.data) // maiza
        // console.log(res.data.data[0].attributes) // maiza
        // console.log(res.data.Search[0]) // maiza

      })
      .catch((error) => {
        //alert("No search results found!! check for spelling ");
        setOpen(true);
      });
      // show2();
     
  };

  const showType = () => {
    axios
    
      .get(`https://doomovies-api.gxc-x.com/api/movies?fields[0]=title&fields[1]=year&fields[2]=imdb&fields[3]=type&fields[4]=image_poster&pagination[page]=1&pagination[pageSize]=10&filters[title][$contains]=${stext}`)
      // .get(`https://www.omdbapi.com/?apikey=4eb65943&s=${stext}`)
      .then((res) => {
        setresult(res.data.data.map((p) => p));
        // setresult(res.data.Search.map((p) => p));
        // console.log(res.data) // maiza
        // console.log(res.data.data[0].attributes) // maiza
        // console.log(res.data.Search[0]) // maiza

      })
      .catch((error) => {
        //alert("No search results found!! check for spelling ");
        setOpen(true);
      });
      show2();
     
  };



  const show2 = () => {
    axios
    .get(`https://doomovies-api.gxc-x.com/api/movies?fields[0]=title&fields[1]=type_movies&fields[2]=year&fields[3]=imdb&fields[4]=type&fields[5]=image_poster&pagination[page]=2&pagination[pageSize]=7&filters[title][$contains]=${stext}`)
    .then((res) => {
      setresult2(res.data.Search.map((s) => s));
      // console.log(res.data)  // maiza

    })
    .catch((error) => {
     
    });
    
      

  };
  function showDetail(i) {
    setdetailbool(true);
    setimval(i);
  }
  //to toggle boolean
  function funsetdetailbool() {
    setdetailbool(false);
  }
  
  useEffect(() => {
    show();
    showmenuleft();
  }, []);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
     <Welcome
		loopDuration={2000}
		data={[
		{
		
    image: require('./WatchAnyMovieLogo.png') ,
    imageAnimation: 'flip',
    backgroundColor: '#212121',
    textAnimation: "flip",
    textColor: 'white',
    text:'Watch Any Movie'
    }
   
		// },
		// {
    //   image: require('./watchanymovie-logo.PNG') ,
    // imageAnimation: 'rotateIn',
    // backgroundColor: '#212121',
    // textAnimation: "fadeInUp",
    // textColor: 'white',
    // text:'Watch Any Movie'
		// },
		// { 
    //   image: require('./watchanymovie-logo.PNG') ,
    // imageAnimation: 'rotateIn',
    // backgroundColor: '#212121',
    // textAnimation: "fadeInUp",
    // textColor: 'white',
    // text:'Watch Any Movie'
		// }
	]}

/>

      <center>
        <div className=" navbar-dark bg-dark">
          <br />
          <input
            type="text"
            value={stext}
            onChange={showChange}
            placeholder="Search movies/series"
            style={{
              height: "57px",
              width: "250px",
              borderRadius: "5px",
              paddingLeft: "30px",
              color: "white",
              background: "#212121",
              border: "2px",
            }}
          />
          <Fab
            color="primary"
            aria-label="add"
            style={{
              background: "#b71c1c",
              borderRadius: "7px",
            }}
            onClick={show}
          >
            <SearchIcon  />
          </Fab>
          <br />
          <br />
        </div>
        <br />
        <div class="container-fluid">
          {/* <nav class="nav justify-content-center">
            {menuleft.map((p) => (
                <a class="nav-link" href="#">{p.attributes.title_category}</a>
            ))}
          </nav> */}
          <nav class="nav justify-content-center">
            <a class="nav-link active" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#">Disabled</a>
          </nav>
        </div>
        <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <nav class="nav flex-column">
              {menuleft.map((p) => (
                <a  key={p.id} onClick={() => showmoviesbygenre(p.attributes.title_category)} class="nav-link" href="#">{p.attributes.title_category}</a>
              ))}
            </nav>
          </div>
          <div class="col-8">
          <div className="resultContainer">
            {result.map((p) => (
              <div key={p.id} onClick={() => showDetail(p.id)}>
                <Card className="movieCard">
                  <CardActionArea>
                    <img className="moviePoster" src={p.attributes.image_poster} alt={p.attributes.image_poster} />

                    <span
                      variant="contained"
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        borderRadius: "4px",
                      }}
                    >
                       {p.Year}
                    </span>
                    <div className="middle">
                      <div className="text">
                        <PlayCircleFilledIcon
                          className="playHoverIcon"
                          fontSize="large"
                          style={{ color: "#aa2e25", fontSize: "60px" }}
                        />
                      </div>
                    </div>
                    <div className="overlay">{p.Title}</div>
                  </CardActionArea>
                </Card>
              </div>
            ))}

            {/* result2 */}
            {result2.map((p) => (
              <div key={p.id} onClick={() => showDetail(p.id)}>
                <Card className="movieCard">
                  <CardActionArea>
                    <img className="moviePoster" src={p.attributes.image_poster} alt={p.attributes.image_poster} />

                    <span
                      variant="contained"
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        borderRadius: "4px",
                      }}
                    >
                       {p.Year}
                    </span>
                    <div className="middle">
                      <div className="text">
                        <PlayCircleFilledIcon
                          className="playHoverIcon"
                          fontSize="large"
                          style={{ color: "#aa2e25", fontSize: "60px" }}
                        />
                      </div>
                    </div>
                    <div className="overlay">{p.Title}</div>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </div>
          </div>
          <div class="col-2">
            <nav class="nav flex-column">
              <a class="nav-link active" href="#">Active</a>
              <a class="nav-link" href="#">Link</a>
              <a class="nav-link" href="#">Link</a>
              <a class="nav-link disabled" href="#">Disabled</a>
            </nav>
          </div>
        </div>
        </div>


        
 
        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        style={{marginTop:"20vh"}}
        
        message="No search results found !!"/>

       

        {detailbool ? (
          <Detail imval={imval} funsetdetailbool={funsetdetailbool} />
        ) : null}
      </center>
      <Footer />
    </>
  );
};
export default List;
