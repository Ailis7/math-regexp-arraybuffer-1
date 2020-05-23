// import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    const sizeA = this.members.size;
    this.members.add(obj);
    const sizeB = this.members.size;
    if (sizeA === sizeB) throw new Error('Нельзя повторно добавлять того же персонажа');
  }

  addAll(...rest) {
    rest.forEach((element) => {
      this.members.add(element);
    });
  }

  get toArray() {
    const result = [];
    this.members.forEach((element) => {
      result.push(element);
    });
    return result;
  }
}
