
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import Searchheader from './components/search_header/search_header';
import Videolist from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query =>
  {
    youtube.search(query)
    .then(videos => setVideos(videos));
    
  }
  useEffect(() =>
  {
    youtube.mostPopular().then(videos => setVideos(videos));
    
  }, []); // 마운트가 되었을 때만 호출 두번째 인자 빈 배열인 경우
  return (
    <div className={styles.app}>
    <Searchheader onSearch={search}/>
    <Videolist videos = {videos} />
    </div>
  );
}

export default App;
