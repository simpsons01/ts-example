interface payload {
  el: HTMLElement
  end: number
  start: number
  duration?: number
  gap?: number
}

class Count {
  public el: HTMLElement
  public end: number
  public start: number
  public duration: number
  public gap: number
  private isCountdown: Boolean
  private current: number
  private now: number

  private defaultOption = {
    gap: 0.00001,
    duration: 2
  }

  constructor(options: payload) {
    const mixedOptions: payload = {
      ...this.defaultOption,
      ...options
    }
    this.el = mixedOptions.el
    this.end = mixedOptions.end
    this.start = mixedOptions.start
    this.duration = mixedOptions.duration
    this.isCountdown = mixedOptions.start - mixedOptions.end > 0
    this.gap = mixedOptions.gap
  }

  private count(timestemp): void {
    if(!this.now) this.now = timestemp
    if(this.isCountdown) {
      this.current = this.start - (this.start - this.end) * Number(((timestemp - this.now) / (this.duration * 1000)).toFixed(2)) 
    }else {
      this.current = this.start + (this.end - this.start) * Number(((timestemp - this.now) / (this.duration * 1000)).toFixed(2))
    }
    if(
      (!this.isCountdown && this.current > this.end - this.gap) ||
      (this.isCountdown && this.current < this.end + this.gap)
    ) {
      this.current = this.end
    }
    this.print(this.current)
    if(this.current !== this.end) {
      window.requestAnimationFrame(this.count.bind(this))
    }
  }

  private print(val: number): void {
    this.el.textContent = `${Math.floor(val)}` 
  }

  public init(): void {
     window.requestAnimationFrame(this.count.bind(this))
  }
}