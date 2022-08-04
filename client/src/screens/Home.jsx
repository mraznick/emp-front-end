const Home = () => {
  return (<>
    <div className="welcome-text">Welcome to VAIC</div>
    <div className="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/ZvfFgm0sfeA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
    <p className="video-container scroll-name">Thank you for visiting our website. Please take a look at the Artwork section.</p>
    </>
  )
}

export default Home