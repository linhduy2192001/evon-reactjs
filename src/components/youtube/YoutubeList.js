import React from 'react';
import YoutubeItem from './YoutubeItem';
import { YoutubeData } from '../../data';

const YoutubeList = () => {
    return (
        <div className="youtube-list">
        {YoutubeData.map((item,index)=> (
          <YoutubeItem 
          key={item.id}
          image={item.image}
          avatar={item.avatar}
          title={item.title}
          author={item.author}
          ></YoutubeItem>
        ))}
      </div> 
    );
};

export default YoutubeList;