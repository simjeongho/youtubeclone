
import { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Searchheader from './components/search_header/search_header';
import Video_detail from './components/video_detail/video_detail';
import Videolist from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo , setSelectedVideo] = useState(null); // c처음에는 선택된 것이 없기 때문에 null이다.'
  
  const selectVideo = (video) =>
  {
    console.log('onclickvideoapp');
    setSelectedVideo(video);
  } 
  const search = useCallback(query =>
    {
      setSelectedVideo(null);
      youtube.search(query)//prop으로 받은 youtube객체dml search를 사용 
      .then(videos => 
        {setVideos(videos);
        });//useState를 통해 state를 업데이트 시켜주는 video  // setSelectedVideo함수를 이용해 다시 selectedVideo를 null로 만들어준다.
      
    } , [youtube]);

  useEffect(() =>
  {
    console.log('mounted');
    youtube.mostPopular().then(videos => setVideos(videos));
    
  }, []); // 마운트가 되었을 때만 호출 두번째 인자 빈 배열인 경우
  return (
    <div className={styles.app}>
    <Searchheader onSearch={search}/>
    <section className={styles.content}>
      {selectedVideo &&
        <div className={styles.detail}>
        <Video_detail video = {selectedVideo} onVideoClick = {selectVideo}/>
      </div>}
    <div className = {styles.list}>
    <Videolist videos = {videos} onVideoClicktolist = {selectVideo} display = {selectedVideo? 'list' : 'grid'}/>
    {selectVideo && console.log('app!!')}
    </div>
    </section>
    </div>
  );
}
//전체적인 흐름
//1.useEffect에서 setVideos함수를 통해 videos를 업데이트 해준다.
//2.업데이트한 videos를 prop으로 video_list에 전달한다. 
//3.prop으로 전달받은 videos들을 하나의 video component로 만들기 위해 map을 이용해 video_item으로 prop으로 전달해준다. 
//4.video_item으로 전달 받은 prop (key, video)를 이용해 video_item component를 만든다. 

//비디오의 목록을 가질 수 있는 state가 있어야 함 
//function component에서 state를 사용할 수 있는 방법은 useState를 사용하면 됨
//리액트 훅에 해당
//const [videos, setVideos] = useState(); 로 할당하면 각각의 state변수와 state를 업데이트 할 수 있는 함수가 정의되게 된다. 
//초기 값은 텅텅 비어진 비디오의 목록 
//useState함수의 파라미터는 state 변수의 초기값
//useEffect는 component가 업데이트 되었거나 mount가 되었을 때 불려지는 lifecycle 함수
//useEffect에서 텅텅 비어진 배열을 두 번째 인자로 전달하면 mount가 되었을 때만 함수를 호출한다
//useEffect함수는 화면 그리기와 배치를 마친 후 호출된다<div className=""></div>
//useEffect함수에 두 번째 인자로 state나 props를 전달했다면 전달한 인자가 바뀔 때만 호출된다.  []안에 전달하면 됨


//mvc 라는 패턴은 model - view - controller와 같다. 
//리액트는 v를 담당하는 친구로 똑똑하게 만들면 안된다.
//dependency injection을 통해 기능을 추가한다. 
//dependency injection을 할 때 class내부에서 새로운 injection된 object를 만들면 안된다. 외부에서 받아와야 함 
//mock클래스를 제공해 주어야 함 만약 app에서 youtube object를 생성하면 app함수가 호출될 때마다 새로운 youyube object를 만들게 된다. 
//하지만 index.js에서 만든 후 prop으로 전달해주면 index.js가 불려지는 초기 단계에 한 번만 생성된다. 

//선택을 하게 되면 선택 된 video를 기억했다가 그 선택된 video에 관련된 video의 정보를 보여주면 된다. 
//detail component를 만들면 된다. 
//선택된 video가 있다면 video옆에다가 보여주면 되고 선택된 video가 없다면 안보여주면 됨 
//선택하는 것은 video_list에서 선택이 되는 것
//따라서 video_list에 콜백함수를 전달 (selectedVideo를 정하는 함수)
//최종적으로 video_item컴포넌트에서 onclick이 되었을 때 video를 onVideoClick에 전달한다. 

//성능 개선 memo
//app이라는 component는 function component이기 때문에 관련된 state나 props가 바뀌면 우리가 다시 정의한 멤버 변수가 다시 만들어진다.
//따라서 SearchHeader에 memo를 설정했을 경우 re-rendering 했을 때 onSearch가 다시 만들어지기 때문에 SearchHeader는 여전히 re-rendering된다. 
// 이와 같은 문제를 해결하기 위해 useCallback함수가 존재한다. 
//useCallback 두 번째 인자에 빈 배열을 전달하면 한 번만 object를 만들고 동일한 오브젝트를 사용한다. 
//usecallback은 한 번 만들어지면 메모리에 보관하면서 사용하기 때문에 메모리에 많은 영향이 갈 수가 있다. 
//그래서 정말 써야할 때만 써야한다. 
//부모 component에서 자식 component에 props를 전달해야 할 때 쓰는 것이 좋음 

export default App;
