export default class CollapseWidget {
  constructor(obj) {
    this.status = true;
    this.buttonText = obj.buttonText;
    this.text = obj.text;
  }

  // eslint-disable-next-line class-methods-use-this
  get CollapseWidgetContainer() {
    return document.querySelector('#Collapse-box-container');
  }

  // eslint-disable-next-line class-methods-use-this
  get CollapEboxZone() {
    return '.collaps-ebox-zone';
  }

  // eslint-disable-next-line class-methods-use-this
  get CollapseButton() {
    return '.collapse-button';
  }

  get markup() {
    return `
    <div class="collaps-ebox-zone collaps-element-on'}">
      <button class="collapse-button">${this.buttonText}</button>
      <div class="collapse-box">${this.text}</div>
    </div>
    `;
  }

  bindToDOM() {
    this.CollapseWidgetContainer.innerHTML = this.markup;
    const CollapseButton = this.CollapseWidgetContainer.querySelector(this.CollapseButton);
    this.toggleCollapse();
    CollapseButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      this.toggleCollapse();
    });
  }

  toggleCollapse() {
    const CollapEboxZone = this.CollapseWidgetContainer.querySelector(this.CollapEboxZone);
    if (this.status) {
      this.status = false;
      CollapEboxZone.classList.remove('collaps-element-on');
      CollapEboxZone.classList.add('collaps-element-off');
    } else {
      this.status = true;
      CollapEboxZone.classList.remove('collaps-element-off');
      CollapEboxZone.classList.add('collaps-element-on');
    }
  }
}
