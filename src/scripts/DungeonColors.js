class DungeonColors {
  constructor() {
    this._currentScheme = this._defaultColorScheme();
    this._container = document.querySelector('.app-color-schemes-container');

    this._createColorSchemes();
  }

  set colorScheme(colors) {
    this._currentScheme = colors;
  }

  get colorScheme() {
    return this._currentScheme;
  }

  // Private Methods
  _defaultColorScheme() {
    return COLOR_SCHEMES[0];
  }

  _createColorSchemes() {
    COLOR_SCHEMES.forEach((colorScheme) => {
      const colorSchemeElem = document.createElement('div');
      colorSchemeElem.className = 'color-scheme';

      const colorSchemeColors = document.createElement('div');
      colorSchemeColors.className = 'color-scheme__colors';

      const updateColorSchemeButton = document.createElement('button');
      updateColorSchemeButton.className =
        'button button--full-width app-color-scheme-button';
      updateColorSchemeButton.innerHTML = colorScheme.name;
      updateColorSchemeButton.addEventListener('click', () => {
        this.colorScheme = colorScheme;
      });

      colorSchemeColors.appendChild(
        this._createColorBlock(colorScheme.background)
      );
      colorSchemeColors.appendChild(this._createColorBlock(colorScheme.floor));
      colorSchemeColors.appendChild(this._createColorBlock(colorScheme.door));
      colorSchemeColors.appendChild(this._createColorBlock(colorScheme.room));

      colorSchemeElem.appendChild(colorSchemeColors);
      colorSchemeElem.appendChild(updateColorSchemeButton);
      this._container.appendChild(colorSchemeElem);
    });
  }

  _createColorBlock(color) {
    const colorBlock = document.createElement('div');
    colorBlock.style.width = '2.5rem';
    colorBlock.style.height = '2.5rem';
    colorBlock.style.background = color;
    return colorBlock;
  }
}

const COLOR_SCHEMES = [
  {
    name: 'Default',
    background: '#2C3A47',
    floor: '#778ca3',
    door: '#fc5c65',
    room: '#4b6584'
  },
  {
    name: 'Ugly',
    background: 'red',
    floor: 'green',
    door: 'blue',
    room: 'yellow'
  }
];

export { DungeonColors };
