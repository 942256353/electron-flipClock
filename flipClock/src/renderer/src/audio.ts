      import path from 'path';
      import url from 'url';
      const audioElement = document.getElementById('timeout')! as HTMLAudioElement;
      const audioPath = path.join(__dirname, 'timeout.wav');
      const audioFileURL = url.pathToFileURL(audioPath).href;
      audioElement.src = audioFileURL;