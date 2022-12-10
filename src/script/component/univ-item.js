class UnivItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  set univ (univ) {
    this._univ = univ
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
          .univ-info {
            padding: 24px;
          }
          .univ-info > h2 {
            font-weight: lighter;
          }
          .univ-info > h4 {
            font-weight: lighter;
          }
          
          .univ-info > a {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
        </style>

        <div class="univ-info">
          <h2>${this._univ.name}</h2>
          <h4>${this._univ.country}</h4>
          <a href="${this._univ.web_pages[0]}">${this._univ.web_pages[0]}</a>
        </div>
      `
  }
}

customElements.define('univ-item', UnivItem)
