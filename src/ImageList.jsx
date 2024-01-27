import React from "react";
import ImageItem from "./ImageItem";

const sources = [
  "https://scontent.fnyt2-1.fna.fbcdn.net/v/t39.30808-6/325962753_570711814587186_7688184972803913502_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9534ce&_nc_eui2=AeFSaUSRzP52AOAG5MaR6yA6aEl4Qk6rdFdoSXhCTqt0V-L-jEvQCTHl4NUANB-_9icXuWCDYKxi4xa_PlIJYvZv&_nc_ohc=kgYt5Y05o4MAX-BKdUn&_nc_ht=scontent.fnyt2-1.fna&oh=00_AfA0AF_KQpI_nsVNLg49nzYnk_P_CDUhioV1zZ7AV45gdw&oe=65BA2A7D",
  "https://scontent.fnyt2-1.fna.fbcdn.net/v/t1.6435-9/127280891_1304312046613044_5403157339027864272_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2be8e3&_nc_eui2=AeGgU9TaTH9kuf046Jar-mEdd1KmUYlowW93UqZRiWjBb2ngiKse-uPq9ijR0eVepc6sgsLnKJ3FPMav15lIT5wl&_nc_ohc=qQ76MWXgnYIAX8-ryYZ&_nc_ht=scontent.fnyt2-1.fna&oh=00_AfDS6babBqxshQARiccrso5yMB63KU2UM0QTa5Jhs5sHHg&oe=65DC3D96"
];

function Image({ source }) {
  return (
    <div className="image-item">
      <img src={source} alt="Memory" />
      <ImageItem/>
    </div>
  );
}

export default function ImageList() {
  return sources.map((source, i) => <Image source={source} key={i} />);
}
