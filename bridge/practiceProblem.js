class WindowsRenderer {
  renderFile(file) {
    console.log(`Reproduzindo ${file} no Windows`);
  }
}

class LinuxRenderer {
  renderFile(file) {
    console.log(`Reproduzindo ${file} no Linux`);
  }
}

class File {
  constructor(renderer) {
    this.renderer = renderer;
  }
}

class Audio extends File {
  play() {
    this.renderer.renderFile("áudio");
  }
}

class Video extends File {
  play() {
    this.renderer.renderFile("vídeo");
  }
}


// Cliente
const windows = new WindowsRenderer();
const linux = new LinuxRenderer();

const a1 = new Audio(windows);
a1.play();

const v1 = new Video(linux);
v1.play();
