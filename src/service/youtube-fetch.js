class YoutubeFetch
{
    constructor (key)
    {
        this.key = key;
        this. getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular()
    {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
                this.getRequestOptions);
            const result_1 = await response.json();
            return result_1.items;
        } catch (error) {
            return console.log('error', error);
        }
    }

    async search(query)
    {
       const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
      
    }
    
}

export default YoutubeFetch;
//api 키는 this.key로 받아오고 gitignore파일에 추가한다.
//axios 라이브러리를 사용하면 json으로 변환하는 과정을 하지 않아도 된다. 
//axios 라이브러리를 사용하면 옛날 브라우저에서 사용하는 객체 또한 사용이 가능하다. 