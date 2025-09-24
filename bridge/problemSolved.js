class AudioRenderer {
    renderSo(so) {
        console.log(`Reproduzindo audio no ${so}`);
    }
}

class VideoRenderer {
    renderSo(so) {
        console.log(`Reproduzindo video no ${so}`);
    }
}

class So {
    constructor(so) {
        this.so = so;
    }
}

class Windows extends So {
    play() {
        this.so.renderSo("Windows");
    }
}

class Linux extends So {
    play() {
        this.so.renderSo("Linux");
    }
}

class Mac extends So {
    play() {
        this.so.renderSo("Mac");
    }
}


const audio = new AudioRenderer();
const video = new VideoRenderer();
  
const a1 = new Windows(audio);
a1.play();
const a2 = new Windows(video);
a2.play();

const b1 = new Linux(audio);
b1.play();
const b2 = new Linux(video);
b2.play();

const c1 = new Mac(audio);
c1.play();
const c2 = new Mac(video);
c2.play();
