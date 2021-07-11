
import { useEffect, useState } from 'react';
import './app.css';
import Videolist from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() =>
  {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDsyvHttw5UQ3lFLryC4fik6Z8s29F-ATo", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []); // 마운트가 되었을 때만 호출 두번째 인자 빈 배열인 경우
  return (
    <Videolist videos = {videos} />
  );
}

export default App;
