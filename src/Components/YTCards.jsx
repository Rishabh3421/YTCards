
import React from 'react';

const formatNumber = (num) => {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'k';
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else {
    return num.toString();
  }
};

const videos = [
  {
    id: 1,
    title: 'BASS BOOSTED MUSIC MIX 2022 🔈 BEST CAR MUSIC 2022 🔈 BEST EDM, BOUNCE BEST CAR MUSIC 2022 🔈 BEST EDM, BOUNCE',
    thumbnailUrl: 'https://i.ytimg.com/vi/QlfTs4cLPFY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHkEUv4WT3cELa3bFYwtVyWV2A7A',
    likes: 1500,
    views: 25000,
    channelName: 'Sample Channel 1',
    channelLogoUrl: 'https://yt3.ggpht.com/5fJ-Fzd-m5xGksoWq7UCKout2I9byp7pKJdbD34IK1fXoY8aqWzfb4Ft00OKJ360LCMoCJLg8A=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: 'राजपाल यादव की लोट पोट कॉमेडी | Dhol | Funny Scenes | Sharman Joshi | Rajpal Yadav | Dhol | Part 05',
    thumbnailUrl: 'https://i.ytimg.com/vi/WmZ0g25d_bE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApdt-qUEKNUMrmOPRy2os4TEeUaQ',
    likes: 1200,
    views: 98000,
    channelName: 'Shemaroo',
    channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKbICyXfcfR1K6UMCPorIMVM_bdSydFGyiBW4eCQ=s48-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    title: 'Call of Duty Modern Warfare 2｜Full Game Playthrough｜4K HDR',
    thumbnailUrl: 'https://i.ytimg.com/vi/_xHZbsYeNLs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1GhTJ-dpBz53vlYUc9UNsl5SVVg',
    likes: 16000,
    views: 118000,
    channelName: 'Cinematic Gaming',
    channelLogoUrl: 'https://yt3.ggpht.com/tpIz_gOdjODAa-7cgoWw_RuVtoQfF-yUmbBoPivZjyYkslMTAI7GbgITMRW4e4hVajvRhdI2=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    title: 'THE NHAGA EATER Trailer (2023) 4K UHD | Unreal Engine 5 Cinematic',
    thumbnailUrl: 'https://i.ytimg.com/vi/2E0mPqy4q8A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLsLc-txi5_2TD_yCyhbZSuDuVcg',
    likes: 110000,
    views: 1118000,
    channelName: 'Moviez Gamer',
    channelLogoUrl: 'https://yt3.ggpht.com/tpIz_gOdjODAa-7cgoWw_RuVtoQfF-yUmbBoPivZjyYkslMTAI7GbgITMRW4e4hVajvRhdI2=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 5,
    title: 'CLIPS THAT MADE *ISHOWSPEED* FAMOUS!',
    thumbnailUrl: 'https://i.ytimg.com/vi/qVS7ATeTETs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhU8fr471SaEPqfoA-0r0AMR2cww',
    likes: 121000,
    views: 1998000,
    channelName: 'SidemenReacts',
    channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKauHmsik43Ft4RvecMaUbmxQ3YSjr0GR5KWJFAj=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 6,
    title: 'CRINGY YOUTUBE HORROR',
    thumbnailUrl: 'https://i.ytimg.com/vi/FDJIukvRz3A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXRaItpkG8abjWezcEBWMbnczF2g',
    likes: 71000,
    views: 9918000,
    channelName: 'SOSIG CLIPS',
    channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKYNFMQkXYIVndbIChF5HF1cG8hWDzCillgWguz7=s68-c-k-c0x00ffffff-no-rj',
  },
  
  {
    id: 7,
    title: 'Top 5 Dog',
    thumbnailUrl: 'https://i.ytimg.com/vi/aE38d1Tu-MI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgrza112HDb-PLDXG91hX8KZONiw',
    likes: 21000,
    views: 99918000,
    channelName: 'squewe',
    channelLogoUrl: 'https://yt3.ggpht.com/ye9E95jmnUmuNQaDvTtSfyLR1rzMW8-XsdLS3lUVFg5iIMQ4tJ7m4Ysgvc0WIOjxVX4vluyxyg=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 8,
    title: 'top 10 Chinese person (Part 2)',
    thumbnailUrl: 'https://i.ytimg.com/vi/81EvrTHGVoI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgjUidLH9n49CxVqrrtENKg8EQJg',
    likes: 69000,
    views: 9418000,
    channelName: 'squewe',
    channelLogoUrl: 'https://yt3.ggpht.com/ye9E95jmnUmuNQaDvTtSfyLR1rzMW8-XsdLS3lUVFg5iIMQ4tJ7m4Ysgvc0WIOjxVX4vluyxyg=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 9,
    title: 'CALL OF DUTY WW2 Gameplay Walkthrough Part 1 Campaign FULL GAME [1080p HD PS4 PRO] - No Commentary',
    thumbnailUrl: 'https://i.ytimg.com/vi/X99Rq2wIm4o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsNhkK36qROSAxbtuPL6ePtjYPEg',
    likes: 119000,
    views: 22318000,
    channelName: 'MKIceAndFire',
    channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKZKONxjvPiI1KjSUfemwQzGXYDeYmgx9Iid6JzWEQ=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 10,
    title: 'Kya Gunda Banega Re Tu | Phir Hera Pheri | Akshay Kumar, Suniel Shetty, Paresh Rawal, Rimi Sen',
    thumbnailUrl: 'https://i.ytimg.com/vi/aJ0SK8ipbVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD486XDcfAr9rQ0qpCkJBzFQctxUw',
    likes: 69000,
    views: 10418000,
    channelName: 'Ajay और Akshay',
    channelLogoUrl: 'https://yt3.ggpht.com/YCydQqCbgvLPzC3msqk6o6sYB4jk4UeBazkKUPcji-CDmD5C8MkEC916QA4Bn-95lKHfu1BW=s48-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 11,
    title: 'Kratos Top 5 Badass Moments God of War',
    thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijStIzHPQtq7dfrZzRy1p0F15Z7qpkYJ8Mg&usqp=CAU',
    likes: 6600,
    views: 118000,
    channelName: 'MKIceAndFire',
    channelLogoUrl: 'https://yt3.ggpht.com/ytc/APkrFKZKONxjvPiI1KjSUfemwQzGXYDeYmgx9Iid6JzWEQ=s68-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 12,
    title: 'Battlefield 3 on Ultra Settings | Jet Mission | 4K 60 FPS',
    thumbnailUrl: 'https://i.ytimg.com/vi/C6K_IVtGxA8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZCRCNBTLEdpcEBuLIMwf4w2OLjg',
    likes: 39000,
    views: 5118000,
    channelName: 'Flakefire',
    channelLogoUrl: 'https://yt3.ggpht.com/QYSLbI_YDKwDYETmosidMnA2EZItFOoSwD2zIHGsJnrzMC0_8q5ucHAksLCHLqP3vEjOxGz3Bd0=s68-c-k-c0x00ffffff-no-rj',
  },


];

const VideoCard = ({ video }) => {
  return (
    <div className="p-4 bg-white shadow-md mb-4 rounded-lg hover:cursor-pointer">
    <img src={video.thumbnailUrl} alt={video.title} className="w-full h-42 object-cover mb-2 rounded-lg" />
    <h2 className="text-lg font-semibold line-clamp-2 mb-2">{video.title}</h2>
    <p className="text-gray-600 text-sm">{formatNumber(video.views)} views - {formatNumber(video.likes)} likes</p>
    <div className="flex items-center mt-2">
      <img src={video.channelLogoUrl} alt={`${video.channelName} logo`} className="w-8 h-8 rounded-full" />
      <p className="ml-2 text-gray-700">{video.channelName}</p>
    </div>
  </div>
    
  );
};

const VideoCardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Tranding Videos</h1>
      <VideoCardList />
    </div>
  );
};

export default App;
