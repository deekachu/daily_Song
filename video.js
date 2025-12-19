const videos = [
  {
    date: "2025-10-01",
    title: "Song One",
    youtubeId: "VIDEO_ID_1"
  },
  {
    date: "2025-10-02",
    title: "Song Two",
    youtubeId: "VIDEO_ID_2"
  }
];

function getTodayVideo() {
  const today = new Date().toISOString().slice(0, 10);
  return videos.find(v => v.date === today) || videos[videos.length - 1];
}

