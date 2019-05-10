class DungeonKeyColor {
  static create(label, color) {
    const elem = document.createElement('div');
    elem.classList = 'dungeon-key__color-info';
    elem.innerHTML = `
      <div class="dungeon-key__color" style='background-color: ${color}'></div>
      <span class="dungeon-key__label">${label}</span>
    `;
    return elem;
  }
}

export { DungeonKeyColor };
