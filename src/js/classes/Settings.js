/**
 * Класс с настройками по-умолчанию
 * @class Settings
 * @param {Object[]} this.userSettings тут хранятся настройки
 * @param {Object[]} this.defaultSettings допустимые настройки
 */
class Settings {
  constructor() {
    this.userSettings = new Map();
    this.userSettings.set('theme', 'dark');
    this.userSettings.set('music', 'trance');
    this.userSettings.set('difficulty', 'easy');
    this.defaultSettings = {
      theme: ['light', 'gray', 'dark'],
      music: ['pop', 'rock', 'chillout', 'off', 'trance'],
      difficulty: ['normal', 'hard', 'nightmare', 'easy'],
    };
  }

  /**
   * Пользователь задаёт настройки
   * @param {Object[]} newSet объект с key и value соответствующие натсройкам
   */
  set userChoise(newSet) {
    try {
      for (const prop in newSet) {
        if (this.defaultSettings[prop].indexOf(newSet[prop]) !== -1) {
          this.userSettings.set(prop, newSet[prop]);
        } else {
          throw new Error();
        }
      }
    } catch (e) {
      throw new Error();
    }
  }

  get userChoise() {
    return this.userSettings;
  }
}

export default Settings;
