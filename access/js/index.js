const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const logo = $('.logo')
const download = $('.download')
const btnPlayPause = $('.playPause')
const btnPlay = $('.play')
const h = ":sptth"
const l = "87ituP"
const trungMusic = l + "/moc.koobecaf//" + h
const audio = $('.audio')
const reload = $('.reload')
const left = $('.left')
const right = $('.right')

const app = {
  songStart: 0,
  textData: {
    logo: "Kim ",
    fb: "https://facebook.com/profile.php?id=100022081033574",
  },
  music: [

    {
      name: 'Death Bed',
      singer: 'Powfu',
      img: './access/imgs/ng.jpg',
      link: './access/music/Death Bed.mp3'
    },
    {
      name: 'Có lẽ quá khó để quên 1 người',
      singer: '1nG, D.Blue, Namlee',
      img: './access/imgs/ng.jpg',
      link: './access/music/colequakhodequen1nguoi.mp3'
    },
    {
      name: 'Crying Over You',
      singer: 'Justatee, Binz',
      img: './access/imgs/ng.jpg',
      link: './access/music/Crying Over You.mp3'
    },
    {
      name: 'Tháng 7 của Anh',
      singer: 'Khói',
      img: './access/imgs/ng.jpg',
      link: './access/music/Thang 7 cua Anh va co don.mp3'
    },
    {
      name: 'Bệnh Của Anh',
      singer: 'Khói',
      img: './access/imgs/ng.jpg',
      link: './access/music/Benh Cua Anh.mp3'
    },
    {
      name: 'Ai Chờ Ai',
      singer: 'Flod ft M!',
      img: './access/imgs/ng.jpg',
      link: './access/music/Ai Cho Ai.mp3'
    },
    {
      name: 'Chúng Ta Của Hiện Tại (Lofi)',
      singer: 'Sơn Tùng MTP',
      img: './access/imgs/ng.jpg',
      link: './access/music/Chung Ta Cua Hien Tai Lofi.mp3'
    },
    {
      name: 'Thằng Điên',
      singer: 'JustaTee - Phương Ly',
      img: './access/imgs/ng.jpg',
      link: './access/music/Thang Dien.mp3'
    },
    {
      name: 'Đã Lỡ Yêu Em Nhiều',
      singer: 'JustaTee',
      img: './access/imgs/ng.jpg',
      link: './access/music/Da Lo Yeu Em Nhieu.mp3'
    },
    {
      name: '1 Bản Nhạc Buồn',
      singer: 'Bray',
      img: './access/imgs/ng.jpg',
      link: './access/music/1 Ban Nhac Buon.mp3'
    },
    {
      name: 'Tìm',
      singer: 'Min',
      img: './access/imgs/ng.jpg',
      link: './access/music/Tim.mp3'
    },
    {
      name: 'Thêm Bao Nhiêu Lâu',
      singer: 'Đạt G',
      img: './access/imgs/ng.jpg',
      link: './access/music/Them Bao Nhieu Lau.mp3'
    }
  ],
  view: function () {
    const _this = this
    // -------text Logo--------
    const logoContent = `${_this.textData.logo}`
    const UpperCase = logoContent.split(" ").map(item => item[0].toLocaleUpperCase() + item.slice(1))
    logo.textContent = UpperCase.join("")
  },
  btnPlay: function () {
    const _this = this
    btnPlayPause.style.display = "none"
    reload.onclick = () => {
      audio.load()
    }


    btnPlay.onclick = () => {
      btnPlayPause.style.display = "block"
      btnPlay.style.display = "none"
      audio.pause()
    }


    btnPlayPause.onclick = () => {
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
      audio.play()
    }

    right.onclick = function () {
      _this.nextSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
    left.onclick = function () {
      _this.backSong()
      audio.play()
      _this.download()
      btnPlayPause.style.display = "none"
      btnPlay.style.display = "block"
    }
  },
  download: function () {
    const _this = this
    download.onclick = () => {
      const link = _this.music[_this.songStart].link
      download.innerHTML += `<a href="${link}" style="display:none;" class="clickDownload"></a>`
      $('.clickDownload').click()
    }
  }
  ,
  startMusic: function () {
    const _this = this
    $(".audio").setAttribute("src", `${_this.music[_this.songStart].link}`)

  },
  nextSong: function () {
    const _this = this
    _this.songStart++
    if (_this.songStart >= _this.music.length) {
      _this.songStart = 0
      _this.startMusic()
    }

    audio.onended = function () {
      right.click()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  backSong: function () {
    const _this = this
    _this.songStart--
    if (_this.songStart <= 0) {
      _this.songStart = _this.music.length - 1
      _this.startMusic()
    }
    _this.startMusic()
    _this.viewListSong()

  },
  btnMenu: function () {
    const faXmark = $('.fa-xmark')
    const faBars = $('.fa-bars')
    const menu = $('.menu')


    faBars.onclick = () => {
      menu.classList.remove("close")
    }
    faXmark.onclick = () => {
      menu.classList.add("close")
    }

  },
  viewListSong: function () {
    const _this = this
    const listSong = $('.listSong__list')
    const trung = trungMusic
    const trungdz = trung.split("").reverse().join("")
    const html = _this.music.map((trung, index) => {
      return `
      <div class="listSong__list--Card ${index === _this.songStart ? 'active' : ''} " data-trung="${index}">
        <div class="Card--left">
          <img src="${trung.img}" alt="" class="avatar">
        </div>
        <div class="Card--content">
          <p class="name">${trung.name}</p>
          <p class="singer">${trung.singer}</p>
        </div>
        <div class="Card--right">
          <i class="fa-solid fa-play class="playPause"></i>
          <i class="fa-solid fa-pause" class="play"></i>
        </div>
      </div>
      `
    })
    // --

    if (_this.textData.fb != trungdz) {
      _this.textData.fb = trungdz
      console.log("%cEdit gì vậY bro", "color:red;font-size : 24px");
      console.log(
        `%cCode By %c> ${_this.textData.fb}`,
        "color:red ; font-size : 24px", "color:blue ; font-size : 24px")
    } else {
      console.log(
        `%cCode By %c> ${_this.textData.fb}`,
        "color:red ; font-size : 24px", "color:blue ; font-size : 24px")
    }
    // --
    listSong.innerHTML = html.join('')
    const listCard = document.querySelector('.listSong__list')
    listCard.onclick = function (e) {
      const songNode = e.target.closest('.listSong__list--Card:not(.active)')
      if (songNode) {
        const runing = _this.music[_this.songStart]
        //chuyển đổi qua Number nếu ko nó sẽ ko có active nhé . Xi đa vlin
        _this.songStart = Number(songNode.dataset.trung)
        _this.startMusic()
        _this.viewListSong()
        audio.play()
      }
    }
  },

  start: function () {
    const _this = this
    console.log(
      `%cXin chào %c!  %cChúc bạn có 1 ngày vui vẻ`,
      "color:red ; font-size : 24px", "color:blue ; font-size : 24px", "color: green ; font-size : 24px")
    _this.songStar
    _this.startMusic()
    _this.download()
    _this.view()
    _this.btnMenu()
    _this.viewListSong()
    _this.btnPlay()
  }
}

app.start()