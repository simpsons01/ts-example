enum DirectionEnum {
  right = "right",
  left = "left"
}

enum SwiperItemMoveEnum {
  enter = "enter",
  leave = "leave"
}

type DirectionState = DirectionEnum.right | DirectionEnum.left

type SwiperItemMoveState = SwiperItemMoveEnum.enter | SwiperItemMoveEnum.leave 

type imagePayload = {
  url: string
}

interface SwiperContract {
  el: HTMLElement
  images: imagePayload[]
  swiperItemList: SwiperItem[]
  total: number
  currentPage: number
  updateCurrentPage(page: number): void
  updateView(enter: number, leave: number, direction: DirectionState): void
}

interface SwiperItemContract {
  el: HTMLElement
  image: imagePayload
  index: number
  init(): HTMLElement
  show(): void
  hide(): void
  move(state: SwiperItemMoveState, direction: DirectionState): void
}

class SwiperItem implements SwiperItemContract {
  el: HTMLElement
  image: imagePayload
  index: number
  constructor(options: { image: imagePayload, index: number }) {
    this.image = options.image
    this.index = options.index
  }
  public init(): HTMLElement {
    const swiperItem: HTMLElement = document.createElement("div")
    swiperItem.classList.add("swiper-item")
    swiperItem.style.backgroundImage = `url(${this.image.url})`
    swiperItem.dataset.pageIndex = `${this.index}`
    this.el = swiperItem
    return this.el
  }
  public move(state, direction): void {
    const vm = this
    this.el.classList.add(`${state}-${direction}`)
    this.el.addEventListener("animationend", function elAnimationend() {
      vm.el.classList.remove(`${state}-${direction}`)
      if(state === SwiperItemMoveEnum.leave) {
        vm.hide()
      }
      vm.el.removeEventListener("animationend", elAnimationend)
    })
  }
  public show(): void {
    this.el.classList.add("show")
  }
  public hide(): void {
    this.el.classList.remove("show")
  }
}

class Swiper implements SwiperContract {
  public el: HTMLElement
  public images: imagePayload[]
  public currentPage: number = 0
  public total: number
  public swiperItemList: SwiperItem[] = []
  constructor(options: { el: HTMLElement, imagesList: imagePayload[] }) {
    this.el = options.el
    this.images = options.imagesList
    this.total = options.imagesList.length
    this.init()
  }
  private init(): void {
    this.images.forEach((image: imagePayload, index: number) => {
       const swiperItem = new SwiperItem({ image, index })
       this.swiperItemList = [...this.swiperItemList, swiperItem]
       this.el.querySelector(".swiper-item-container").appendChild(swiperItem.init())
       if(swiperItem.index === this.currentPage) {
         swiperItem.show()
       }
    })
  }
  public updateCurrentPage(page): void {
    let direction: DirectionState, lastPage: number = this.currentPage
    this.currentPage = (page + this.total) % this.total
    if(this.currentPage === 0 && lastPage === this.total - 1) {
      direction = DirectionEnum.left
    }else if(this.currentPage === this.total - 1 && lastPage === 0) {
      direction = DirectionEnum.right
    }else {
      direction = this.currentPage < lastPage ? DirectionEnum.right : DirectionEnum.left
    }
    this.updateView(this.currentPage, lastPage, direction)
  }
  public updateView(enter: number, leave: number, direction: DirectionState): void {
    this.swiperItemList.forEach((swiperItem: SwiperItem) => {
      swiperItem.hide()
      if(swiperItem.index === leave) {
        swiperItem.show()
        requestAnimationFrame(()=>{
          swiperItem.move(SwiperItemMoveEnum.leave, direction)
        })
      }
      if(swiperItem.index === enter) {
        swiperItem.show()
        requestAnimationFrame(()=>{
          swiperItem.move(SwiperItemMoveEnum.enter, direction)
        })
      }
    })
  }
}